import AccountIcon from "../components/svg/AccountIcon";
import BlogIcon from "../components/svg/BlogIcon";
import CorporateIcon from "../components/svg/Corporate";
import DefaultIcon from "../components/svg/Default";
import EcommerceIcon from "../components/svg/ECommerce";
import OnlineCoursesIcon from "../components/svg/OnlineCourses";
import ProjectsIcon from "../components/svg/Projects";
import SocialIcon from "../components/svg/SocialIcon";

export const leftSidebarData = [
  {
    title: "Dashboards",
    sections: [
      {
        name: "Default",
        isExpandable: false,
        isSelected: true,
        icon: DefaultIcon,
      },
      {
        name: "eCommerce",
        isExpandable: true,
        isSelected: false,
        icon: EcommerceIcon,
      },
      {
        name: "Projects",
        isExpandable: true,
        isSelected: false,
        icon: ProjectsIcon,
      },
      {
        name: "Online Courses",
        isExpandable: true,
        isSelected: false,
        icon: OnlineCoursesIcon,
      },
    ],
  },
  {
    title: "Pages",
    sections: [
      {
        name: "User Profile",
        isExpandable: true,
        isSelected: false,
        isExpanded: true, // Indicates that the section is currently expanded
        subTabs: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ],
      },
      {
        name: "Account",
        isExpandable: true,
        isSelected: false,
        icon: AccountIcon,
      },
      {
        name: "Corporate",
        isExpandable: true,
        isSelected: false,
        icon: CorporateIcon,
      },
      { name: "Blog", isExpandable: true, isSelected: false, icon: BlogIcon },
      {
        name: "Social",
        isExpandable: true,
        isSelected: false,
        icon: SocialIcon,
      },
    ],
  },
];
