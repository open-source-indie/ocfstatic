import Navbar from "~/components/Navbar"
import Footer from "~/components/Footer"
import { useApiRoute } from "~/utils/api"
import {
  Box,
  type BoxProps,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  List,
  ListItem,
  Text,
  Heading,
  UnorderedList,
} from "@chakra-ui/react"
import Layout from "~/components/Layout"
import FullWidthBox from "~/components/FullWidthBox"
import Link from "~/components/InternalLink"
import { useRef, type ReactNode } from "react"

const IndexPage = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { data: staffInLab } = useApiRoute("/lab/staff")

  return (
    <Layout>
      <Navbar intersectionElement={heroRef} />
      <FullWidthBox
        bgImage="/assets/img/hero.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        ref={heroRef}
        pt="16" // allocate space for navbar
      >
        <Box py={12}>
          <Text fontSize="3xl" fontWeight="semibold">
            Welcome to the Open Computing Facility!
          </Text>
          <Text maxWidth={{ base: "auto", md: "50%" }} mt={6}>
            The Open Computing Facility (OCF) is an all-volunteer student
            organization dedicated to free computing for all University of
            California, Berkeley students, faculty, and staff.
          </Text>
          <Flex gap={4} direction={{ base: "column", md: "row" }} mt={12}>
            <Link to="/account/create">
              <Button bg="white" w="100%">
                Create Account
              </Button>
            </Link>
            <Link to="/account/hosting">
              <Button bg="white" w="100%">
                Request Hosting
              </Button>
            </Link>
            <Link to="/docs/printing">
              <Button bg="white" w="100%">
                How to Print
              </Button>
            </Link>
            <Link to="/staff-hours">
              <Button bg="white" w="100%">
                Get Help
              </Button>
            </Link>
          </Flex>
        </Box>
      </FullWidthBox>
      <Grid
        py={8}
        templateColumns={{ md: "repeat(3, 1fr)" }}
        templateRows={{ md: "repeat(4, 1fr)" }}
        gap={4}
      >
        <HomeCard
          gridArea="1 / 1 / 2 / 2"
          title={
            <>
              Currently{" "}
              <Text color="green.500" as="span">
                Open
              </Text>
            </>
          }
        >
          <List>
            {staffInLab &&
              staffInLab.staff_in_lab.map((s) => (
                <ListItem key={s.host}>
                  {s.user} on {s.host} since {s.start}
                </ListItem>
              ))}
          </List>
        </HomeCard>
        <HomeCard gridArea="2 / 1 / 3 / 2" title="Staff News"></HomeCard>
        <HomeCard gridArea="1 / 2 / 3 / 3" title="The Lab"></HomeCard>
        <HomeCard gridArea="1 / 3 / 4 / 4" title="About Us">
          <Text>Learn more about what we do!</Text>
          <br />
          <Text>
            The Open Computing Facility is an all-volunteer student organization
            located at the University of California, Berkeley. We&apos;re
            passionate about open source and free software.
          </Text>
          <br />
          <Text>
            Our volunteers maintain services for the Berkeley community.
          </Text>
          <br />
          <UnorderedList>
            <ListItem>A spiffy computer lab in 171 MLK Student Union</ListItem>
            <ListItem>
              Web & email hosting for thousands of student groups and
              individuals
            </ListItem>
            <ListItem>Free printing for all UC Berkeley students</ListItem>
            <ListItem>
              Shell accounts on our powerful on-campus servers
            </ListItem>
            <ListItem>High-performance computing on our GPU server</ListItem>
            <ListItem>...and lots more!</ListItem>
          </UnorderedList>
          <br />
          <Text>
            We hold <Link to="/staff-hours">weekly staff hours</Link> to provide
            assistance with account issues or with OCF services. Drop by to ask
            questions or just to hang out!
          </Text>
        </HomeCard>
        <HomeCard gridArea="3 / 1 / 4 / 3" title="Join Staff!">
          <Flex>
            <Box flex={6}>
              <Text>
                Meetings 8pm every Wednesday at the lab and at{" "}
                <Link to="https://ocf.io/meet">https://ocf.io/meet</Link>.
              </Text>
              <br />
              <Text>
                We meet every week to talk tech and work on cool projects. All
                are welcome to join OCF staff, at any point in the semester!
              </Text>
              <br />
              <Text>
                <b>Sound interesting?</b>
              </Text>
              <br />
              <UnorderedList>
                <ListItem>
                  Subscribe to our{" "}
                  <Link to="https://ocf.io/announce">mailing list</Link> for
                  meeting recaps
                </ListItem>
                <ListItem>
                  Chat with us on <Link to="https://fco.slack.com/">Slack</Link>
                  , <Link to="https://ocf.io/discord">Discord</Link>,{" "}
                  <Link to="https://chat.ocf.berkeley.edu/">Matrix</Link>, or{" "}
                  <Link to="https://new.ocf.berkeley.edu/docs/internal/contact/irc/">
                    IRC
                  </Link>
                </ListItem>
                <ListItem>
                  Drop by and say hello, or{" "}
                  <Link to="/docs/internal/contact">email the staff team</Link>
                </ListItem>
                <ListItem>
                  See more ways to{" "}
                  <Link to="/docs/staff/getinvolved">
                    contribute and get involved
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Center flex={2}>
              <Image src="/assets/img/penguin-sticker.png" />
            </Center>
          </Flex>
        </HomeCard>
        <HomeCard gridArea="4 / 1 / 5 / 2" title="Stats"></HomeCard>
        <LinuxSysadminDecalCard />
      </Grid>
      <Footer />
    </Layout>
  )
}

export default IndexPage

const HomeCard = ({
  title,
  gridArea,
  children,
  ...rest
}: { title: ReactNode; gridArea: string } & Omit<BoxProps, "title">) => {
  return (
    <Box
      bg="white"
      boxShadow="0px 4px 20px 0px #0000000D"
      p={4}
      borderRadius={4}
      gridArea={{ md: gridArea }}
      {...rest}
    >
      {title && (
        <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={3}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  )
}

const LinuxSysadminDecalCard = () => (
  <HomeCard gridArea="4 / 2 / 5 / 4" title="Linux Sysadmin DeCal">
    <Link to="https://decal.ocf.berkeley.edu/">
      <Text>See more</Text>
    </Link>
    <br />
    <Text>
      Whether you are looking to improve your Bash wizardry, just plain GNU, or
      everything Unix and Unix-like, this is the perfect class for you. We offer
      a beginner section for those new to Unix and an advanced section for those
      who have some experience but want to learn more. Both sections are 2 units
      and be held from 8-9pm, the beginner section on Tuesdays and the advanced
      section on Thursdays, right in the OCF lab.
    </Text>
  </HomeCard>
)