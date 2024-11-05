import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "시작하기",
      items: ["getting-started/introduction", "getting-started/examples"],
    },
    {
      type: "category",
      label: "애니메이션",
      items: [
        "animation/overview",
        "animation/layout",
        "animation/gestures",
        "animation/scroll",
        "animation/transition",
      ],
    },
    {
      type: "category",
      label: "컴포넌트",
      items: [
        "components/motion",
        "components/animate-presence",
        "components/layout-group",
        "components/lazy-motion",
        "components/motion-config",
        "components/reorder",
      ],
    },
    {
      type: "category",
      label: "Motion Values",
      items: [
        "motion-values/overview",
        "motion-values/use-motion-value-event",
        "motion-values/use-motion-template",
        "motion-values/use-scroll",
        "motion-values/use-spring",
        "motion-values/use-time",
        "motion-values/use-transform",
        "motion-values/use-velocity",
      ],
    },
    {
      type: "category",
      label: "Hooks",
      items: [
        "hooks/use-animate",
        "hooks/use-animation-frame",
        "hooks/use-drag-controls",
        "hooks/use-in-view",
        "hooks/use-reduced-motion",
      ],
    },
    {
      type: "category",
      label: "Universal",
      items: [
        "universal/animate",
        "universal/scroll",
        "universal/in-view",
        "universal/mix",
        "universal/transform",
        "universal/stagger",
        "universal/frame",
        "universal/easing-functions",
      ],
    },
    {
      type: "category",
      label: "3D",
      items: [
        "3d/introduction",
        "3d/layout-camera",
        "3d/layout-orthographic-camera",
        "3d/motion-canvas",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/accessibility",
        "guides/reduce-bundle-size",
        "guides/upgrade-guides",
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        {
          type: "link",
          label: "GitHub",
          href: "https://github.com/framer/motion",
        },
        {
          type: "link",
          label: "Discord",
          href: "https://www.framer.com/r/discord/",
        },
      ],
    },
  ],
};

export default sidebars;
