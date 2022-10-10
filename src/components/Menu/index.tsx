import { useLocalStorage } from "@mantine/hooks";
import {
  Navbar,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  useMantineColorScheme
} from "@mantine/core";
import {
  TablerIcon,
  IconAlarm,
  IconGauge,
  IconSunHigh as SunHigh,
  IconMoonStars,
} from "@tabler/icons";
import { Link } from "wouter";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  iconColor?: string;
  label: string;
  active?: boolean;
  onClick?(): void;
  href?: string;
}

function NavbarLink({
  icon: Icon,
  label,
  iconColor,
  active,
  onClick,
  href,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <Link href={href === undefined ? "" : href} onClick={onClick}>
        <UnstyledButton
          className={cx(classes.link, { [classes.active]: active })}
        >
          <>
            <Icon stroke={1.5} color={iconColor} />
          </>
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconGauge, label: "Dashboard", link: "/" },
  { icon: IconAlarm, label: "Home", link: "/alarms" },
];

function Menu() {
  const [active, setActive, remove] = useLocalStorage({
    key: "active-tab",
    defaultValue: 0,
  });

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    addEventListener("beforeunload", () => remove());
    return () => removeEventListener("beforeunload", () => remove());
  }, []);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      href={link.link}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink
            icon={dark ? IconMoonStars : SunHigh}
            iconColor={dark ? "#ffec00" : "#00abfb"}
            label=""
            onClick={() => toggleColorScheme()}
          />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}

export default Menu;
