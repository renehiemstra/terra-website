import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  tutorialSidebar: [
    'intro',
    {
        type: 'category',
        label: 'Resource management',
        link: {
            type: 'doc',
            id: 'resource-management/intro',
        },
        items: [
            'resource-management/core-concepts',
            'resource-management/ownership-model',
            'resource-management/comparison',
            'resource-management/tutorial/move-semantics',
            'resource-management/tutorial/value-semantics',
        ],
    },
  ],
};

export default sidebars;
