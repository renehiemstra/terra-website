import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  tutorialSidebar: [
    {
        type: 'category',
        label: 'Getting started',
        link: {
            type: 'doc',
            id: 'getting-started/intro',
        },
        items: [
                'getting-started/install-and-setup',
                'getting-started/your-first-program',
                'getting-started/terra-for-cpp',
        ],
    },
    {
        type: 'category',
        label: 'Core language',
        link: {
            type: 'doc',
            id: 'core-language/intro',
        },
        collapsed: false, // Keep expanded to show contents
        items: [
            {
                type: 'category',
                label: 'Metaprogramming',
                link: {
                  type: 'doc',
                  id: 'core-language/metaprogramming/intro',
                },
                items: [
                  'core-language/metaprogramming/hello-world',
                ],
            },
            {
                type: 'category',
                label: 'Resource management',
                link: {
                    type: 'doc',
                    id: 'core-language/resource-management/intro',
                },
                items: [
                    'core-language/resource-management/core-concepts',
                    'core-language/resource-management/ownership-model',
                    'core-language/resource-management/comparison',
                    'core-language/resource-management/tutorial/move-semantics',
                    'core-language/resource-management/tutorial/value-semantics',
                ],
            },
        ]
    },
    {
        type: 'category',
        label: 'Standard Library',
        link: {
        type: 'doc',
        id: 'standard-library/intro',
        },
        collapsed: false, // Keep expanded to show contents
        items: [
        {
            type: 'category',
            label: 'Allocators',
            link: {
            type: 'doc',
            id: 'standard-library/allocators/intro',
            },
            items: [
                'standard-library/allocators/design',
                'standard-library/allocators/memory-block',
                'standard-library/allocators/interface',
                'standard-library/allocators/custom-allocators'
            ],
        },
        {
            type: 'category',
            label: 'Concepts',
            link: {
            type: 'doc',
            id: 'standard-library/concepts/intro',
            },
            items: [
            ],
        },
        {
            type: 'category',
            label: 'Ranges',
            link: {
            type: 'doc',
            id: 'standard-library/ranges/intro',
            },
            items: [
            ],
        },
        {
            type: 'category',
            label: 'Containers',
            link: {
            type: 'doc',
            id: 'standard-library/containers/intro',
            },
            items: [
            ],
        },
        {
            type: 'category',
            label: 'Linear algebra',
            link: {
            type: 'doc',
            id: 'standard-library/linalg/intro',
            },
            items: [
            ],
        },
        {
            type: 'category',
            label: 'Treads',
            link: {
            type: 'doc',
            id: 'standard-library/threads/intro',
            },
            items: [
            ],
        },
        {
            type: 'category',
            label: 'Unit-testing',
            link: {
            type: 'doc',
            id: 'standard-library/unit-testing/intro',
            },
            items: [
                'standard-library/unit-testing/writing-tests',
                'standard-library/unit-testing/organizing-tests-testenv',
                'standard-library/unit-testing/organizing-tests-testset',
                'standard-library/unit-testing/parameterized-tests',
                'standard-library/unit-testing/parallel-test-suites',
            ],
        },
        {
            type: 'category',
            label: 'Managing dependencies',
            link: {
            type: 'doc',
            id: 'standard-library/package-managing/intro',
            },
            items: [
            ],
        },
        ],
    }
  ],
};

export default sidebars;
