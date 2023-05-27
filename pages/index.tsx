import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
    FiCheckSquare,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";


const Home: NextPage = () => {
    return (
        <Box>
            <SEO
                title="ShiftMate - Shift management made easy"
                description="ShiftMate is your ultimate shift management app, providing simplicity, flexibility, and efficiency to managing shifts."
            />
            <Box>
                <HeroSection/>

                <HighlightsSection/>

                <FeaturesSection/>

                <TestimonialsSection/>

                <PricingSection/>

                <FaqSection/>
            </Box>
        </Box>
    );
};
const HeroSection: React.FC = () => {
  return (
      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="100%" />
        <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
          <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
            <Hero
                id="home"
                justifyContent="flex-start"
                px="0"
                title={
                  <FallInPlace>
                    Simplify your
                    <Br /> shift management
                  </FallInPlace>
                }
                description={
                  <FallInPlace delay={0.4} fontWeight="medium">
                    ShiftMate is a <Em>shift management app</Em>
                    <Br /> that allows you to manage your shifts with ease.
                  </FallInPlace>
                }
            >
              <FallInPlace delay={0.8}>
                <HStack pt="4" pb="12" spacing="8">
                  {/*<NextjsLogo height="28px" /> <ChakraLogo height="20px" />*/}
                </HStack>

                <ButtonGroup spacing={4} alignItems="center">
                  <ButtonLink colorScheme="primary" size="lg" href="/signup">
                    Sign Up
                  </ButtonLink>
                  <ButtonLink
                      size="lg"
                      href="/demo"
                      variant="outline"
                      rightIcon={
                        <Icon
                            as={FiArrowRight}
                            sx={{
                              transitionProperty: "common",
                              transitionDuration: "normal",
                              ".chakra-button:hover &": {
                                transform: "translate(5px)",
                              },
                            }}
                        />
                      }
                  >
                    View demo
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </Hero>
            <Box
                height="600px"
                position="absolute"
                display={{ base: "none", lg: "block" }}
                left={{ lg: "60%", xl: "55%" }}
                width="80vw"
                maxW="1100px"
                margin="0 auto"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                      src="/static/screenshots/list.png"
                      layout="fixed"
                      width={1200}
                      height={762}
                      alt="Screenshot of a ListPage in ShiftMate"
                      quality="75"
                      priority
                  />
                </Box>
              </FallInPlace>
            </Box>
          </Stack>
        </Container>

        <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={4}
            innerWidth="container.xl"
            pt="20"
            features={[
                {
                    title: "User-Friendly",
                    icon: FiSmile,
                    description: "ShiftMate provides an intuitive user interface, making shift management a breeze.",
                    iconPosition: "left",
                    delay: 0.6,
                },
                {
                    title: "Flexible",
                    icon: FiSliders,
                    description:
                        "ShiftMate provides flexibility to accommodate any shift schedule, including rotating, fixed, or flexible shifts.",
                    iconPosition: "left",
                    delay: 0.8,
                },
                {
                    title: "Efficient",
                    icon: FiGrid,
                    description:
                        "With ShiftMate, schedule and manage your shifts more efficiently, reducing time spent on administrative tasks.",
                    iconPosition: "left",
                    delay: 1,
                },
                {
                    title: "Accessible",
                    icon: FiThumbsUp,
                    description:
                        "Access ShiftMate from any device, anywhere. Manage your shifts on the go with our mobile-friendly interface.",
                    iconPosition: "left",
                    delay: 1.1,
                },
            ]}
            reveal={FallInPlace}
        />
      </Box>
  );
};

const HighlightsSection = () => {
    return (
        <Highlights>
            <HighlightsItem colSpan={[1, null, 2]} title="User-Friendly Design">
                <VStack alignItems="flex-start" spacing="8">
                    <Text color="muted" fontSize="xl">
                        With ShiftMate, you get started quickly with <Em>effortless shift management</Em>.
                        This intuitive tool is perfect for small businesses and restaurants,
                        allowing you to organize your workforce effectively and streamline operations.
                    </Text>
                </VStack>
            </HighlightsItem>
            <HighlightsItem title="Designed for your Business">
                <Text color="muted" fontSize="lg">
                    ShiftMate is specifically designed to cater to the unique needs of small businesses and restaurants.
                    No need to re-invent your shift management strategies - simply adapt ShiftMate to your current structure.
                </Text>
            </HighlightsItem>
            <HighlightsTestimonialItem
                name="Steve Hobbs , Owner of Hobbs Restaurant"
                description="Founder"
                avatar="/static/images/avatar.jpg"
                gradient={["pink.200", "purple.500"]}
            >
                “ShiftMate revolutionized how we manage our shifts. It has saved us countless hours and greatly improved our staff productivity.”
            </HighlightsTestimonialItem>
            <HighlightsItem
                colSpan={[1, null, 2]}
                title="Empower your Business with ShiftMate"
            >
                <Text color="muted" fontSize="lg">
                    With ShiftMate, you are always two steps ahead. Tackle your unique business challenges and let ShiftMate handle your shift management.
                </Text>
                <Wrap mt="8">
                    {[
                        "shift scheduling",
                        "mobile access",
                        "time-saving",
                        "customization",
                        "effective onboarding",
                        "WAI-ARIA compliant",
                        "composable",
                        "accessibility",
                        "efficiency",
                        "user-friendly",
                        "flexible",
                        "branding support",
                        "all-in-one",
                        "productivity booster",
                    ].map((value) => (
                        <Tag
                            key={value}
                            variant="subtle"
                            colorScheme="purple"
                            rounded="full"
                            px="3"
                        >
                            {value}
                        </Tag>
                    ))}
                </Wrap>
            </HighlightsItem>
        </Highlights>
    );
};

const FeaturesSection = () => {
    return (
        <Features
            id="features"
            title={
                <Heading
                    lineHeight="short"
                    fontSize={["2xl", null, "4xl"]}
                    textAlign="left"
                    as="p"
                >
                    ShiftMate: Beyond a Shift Management Tool.
                </Heading>
            }
            description={
                <>
                    ShiftMate combines user-friendly features with a powerful backend to transform how you manage shifts.
                    Use it as a template for your shift management or foundation for your staffing system.
                </>
            }
            align="left"
            columns={[1, 2, 3]}
            iconSize={4}
            features={[
                {
                    title: "User-Friendly Interface.",
                    icon: FiSmile,
                    description:
                        "ShiftMate's intuitive interface makes managing shifts as easy as a few clicks, freeing up your time for other tasks.",
                    variant: "inline",
                },
                {
                    title: "Flexible Scheduling.",
                    icon: FiSliders,
                    description:
                        "ShiftMate accommodates all shift schedules - rotating, fixed, or flexible. Adapt it to your unique needs.",
                    variant: "inline",
                },
                {
                    title: "Efficiency Booster.",
                    icon: FiGrid,
                    description:
                        "ShiftMate reduces time spent on administrative tasks, allowing you to focus on what really matters.",
                    variant: "inline",
                },
                {
                    title: "Mobile Accessibility.",
                    icon: FiThumbsUp,
                    description:
                        "Access ShiftMate anytime, anywhere. Our mobile-friendly interface keeps you connected even on the go.",
                    variant: "inline",
                },
                {
                    title: "Customization.",
                    icon: FiToggleLeft,
                    description:
                        "Brand ShiftMate as you like with theme support and style props. Make it truly yours.",
                    variant: "inline",
                },
                {
                    title: "Effective Onboarding.",
                    icon: FiUserPlus,
                    description:
                        "Get started easily with ShiftMate's straightforward onboarding process. Manage your shifts in no time.",
                    variant: "inline",
                },
                {
                    title: "WAI-ARIA Compliant.",
                    icon: FiCheckSquare,
                    description:
                        "ShiftMate follows WAI-ARIA standards for web accessibility, ensuring it can be used by all.",
                    variant: "inline",
                },
                {
                    title: "Highly Composable.",
                    icon: FiBox,
                    description:
                        "Compose ShiftMate components to fit your needs and mix them together to create new ones.",
                    variant: "inline",
                },
            ]}
        />
    );
};


const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "We're lunching soon!! 🚀 ",
        description:'',
        href: "",
        action: false,
      },
    },
  };
}
