import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  koSidebar: [
    {
      type: "category",
      label: "시작하기",
      items: ["introduction/quick-start", "introduction/examples"],
      collapsed: false,
    },
    {
      type: "category",
      label: "애니메이션",
      items: [
        {
          type: "doc",
          id: "animation/overview",
          label: "개요",
        },
        "animation/transition",
        "animation/gestures",
        "animation/scroll",
        {
          type: "doc",
          id: "animation/layout",
          label: "레이아웃",
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "컴포넌트",
      items: [
        {
          type: "doc",
          id: "components/motion",
          label: "motion",
        },
        "components/motion-config",
        "components/animate-presence",
        "components/lazy-motion",
        "components/layout-group",
        "components/reorder",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Motion Values",
      items: [
        {
          type: "doc",
          id: "motion-values/overview",
          label: "개요",
        },
        "motion-values/use-motion-value-event",
        "motion-values/use-motion-template",
        "motion-values/use-scroll",
        "motion-values/use-spring",
        "motion-values/use-time",
        "motion-values/use-transform",
        "motion-values/use-velocity",
      ],
      collapsed: false,
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
      collapsed: false,
    },
    {
      type: "category",
      label: "가이드",
      items: [
        "guides/accessibility",
        "guides/reduce-bundle-size",
        "guides/upgrade-guides",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "React Three Fiber",
      items: [
        "react-three-fiber/overview",
        "react-three-fiber/motion-canvas",
        "react-three-fiber/layout-camera",
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
