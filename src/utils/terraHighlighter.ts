import { Parser, Language, Tree, Query } from 'web-tree-sitter';

let parser: Parser | null = null;
let parserPromise: Promise<Parser> | null = null;

async function initParser(): Promise<Parser> {
    if (parser) return parser;
    if (parserPromise) return parserPromise;

    parserPromise = (async () => {
        try {
            await Parser.init();
            const terraParser = new Parser();
            const terraLanguage = await Language.load('/terra-website/wasm/tree-sitter-exoterra.wasm');
            terraParser.setLanguage(terraLanguage);
            parser = terraParser;
            return terraParser;
        } catch (error) {
            parserPromise = null;
            throw new Error(`Parser initialization failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    })();

    return parserPromise;
}

let cachedQuery: Query | null = null;
let cachedQueryPromise: Promise<Query> | null = null;

async function loadQuery(parser: Parser): Promise<Query> {
    if (cachedQuery) return cachedQuery;
    if (cachedQueryPromise) return cachedQueryPromise;

    cachedQueryPromise = (async () => {
        const scmPath = process.env.NODE_ENV === 'production'
            ? '/terra-website/scm/highlights.scm' // Production path
            : '/terra-website/scm/highlights.scm'; // Development path
        const response = await fetch(scmPath);
        if (!response.ok) throw new Error(`Failed to fetch highlights.scm: ${response.statusText}`);
        const scmPatterns = await response.text();
        const language = parser.language;
        if (!language) throw new Error('Parser language is not set');
        const query = new Query(language, scmPatterns);
        cachedQuery = query;
        return query;
    })();

    return cachedQueryPromise;
}

function escapeHtml(text: string): string {
    return text
    .replace(/&/g, '&amp;') // Fixed: Proper HTML entities
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br>'); // Preserve newlines as-is
}

type HighlightedHtml = string;

export async function highlightTerraCode(code: string, isInline: boolean = false): Promise<HighlightedHtml> {
    const trimmedCode = code.replace(/\n+$/, '');
    console.log('Trimmed Terra code:', JSON.stringify(trimmedCode)); // Debug: Check for \n
    try {
        const terraParser = await initParser();
        const query = await loadQuery(terraParser);
        const tree = terraParser.parse(trimmedCode);
        console.log("parse-tree", tree.rootNode.toString());
        if (!tree) throw new Error('Failed to parse code');
        const html = await treeToHtml(tree, query);
        console.log('highlightTerraCode output:', html); // Debug
        return html
    } catch (error) {
        console.error(`Highlighting failed: ${error instanceof Error ? error.message : String(error)}`);
        return escapeHtml(trimmedCode);
    }
}

async function treeToHtml(tree: Tree, query: Query): Promise<string> {
    const nodeInfo = new Map<number, { text: string; tag: string; startIndex: number; endIndex: number }>();

    // pattern match and update node-data
    for (const match of query.matches(tree.rootNode)) {
        for (const capture of match.captures) {
            nodeInfo.set(capture.node.id, {
                text: capture.node.text,
                tag: capture.name,
                startIndex: capture.node.startIndex,
                endIndex: capture.node.endIndex}
            )
        }
    }
    
    // generate HTML by collecting in order all node-data
    let html = "";
    let lastEnd = 0;
    for (const [, info] of nodeInfo) {
        if (info.startIndex < lastEnd) continue;
        if (info.startIndex > lastEnd) {
            html += escapeHtml(tree.rootNode.text.substring(lastEnd, info.startIndex));
        }
        html += `<span class="${info.tag}">${escapeHtml(info.text)}</span>`;
        lastEnd = info.endIndex;
    }
    if (lastEnd < tree.rootNode.text.length) {
        html += escapeHtml(tree.rootNode.text.substring(lastEnd));
    }

    // Split into lines and use <br> correctly
    return html
}

class LeafNodeIterator implements IterableIterator<any> {
    private cursor: any;
    private done: boolean;

    constructor(tree: Tree) {
        this.cursor = tree.walk();
        this.done = false;
    }

    [Symbol.iterator](): IterableIterator<any> {
        return this;
    }

    next(): IteratorResult<any> {
        while (!this.done) {
            while (this.cursor.gotoFirstChild()) {}
            const node = this.cursor.currentNode;
            if (node.childCount === 0) {
                let hasNext = this.cursor.gotoNextSibling();
                if (!hasNext) {
                    while (!hasNext && this.cursor.gotoParent()) {
                        hasNext = this.cursor.gotoNextSibling();
                    }
                    this.done = !hasNext;
                }
                return { value: node, done: false };
            }
            let hasNext = this.cursor.gotoNextSibling();
            if (!hasNext) {
                while (!hasNext && this.cursor.gotoParent()) {
                    hasNext = this.cursor.gotoNextSibling();
                }
                this.done = !hasNext;
            }
        }
        return { value: undefined, done: true };
    }
}