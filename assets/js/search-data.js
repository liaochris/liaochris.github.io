// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Resume.pdf";
          },
        },{id: "news-new-working-paper-organizational-resilience-evidence-from-open-source-software-i-show-which-organizational-practices-predict-increased-resilience-to-departures-in-open-source-software-organizations",
          title: '[New working paper] Organizational Resilience: Evidence from Open Source Software: I show which...',
          description: "",
          section: "News",},{id: "news-new-working-paper-generalized-random-forest-event-studies-i-show-how-generalized-random-forests-athey-et-al-2019-can-be-used-to-estimate-heterogeneous-treatment-effects-in-dynamic-event-study-settings",
          title: '[New working paper] Generalized Random Forest Event Studies: I show how generalized random...',
          description: "",
          section: "News",},{id: "news-life-update-i-joined-openai-as-a-visiting-economics-researcher-to-study-the-economic-impacts-of-ai",
          title: '[Life update] I joined OpenAI as a visiting economics researcher to study the...',
          description: "",
          section: "News",},{id: "news-life-update-i-started-my-phd-in-economics-at-uc-berkeley-feel-free-to-reach-out-via-email-if-you-re-in-the-bay-area",
          title: '[Life update] I started my PhD in economics at UC Berkeley. Feel free...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%72%69%73%6C%69%61%6F@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/liaochris", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chris-liao-8865b219a", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
