import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  tutorialSidebar: [
    {
        type: 'doc',
        label: 'Getting started',
        id: 'getting-started',    
    },
    {
      type: 'category',
      label: 'Metaprogramming',
      link: {
        type: 'doc',
        id: 'metaprogramming/intro',
      },
      items: [
        'metaprogramming/hello-world',
      ],
    },
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
                'standard-library/allocators/design'
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
