import { GetServerSideProps } from "next";

import { LinkedIn } from "@components/icons/LinkedIn";
import { LocationPin } from "@components/icons/LocationPin";
import { Mail } from "@components/icons/Mail";
import { IconPostLayout } from "@components/layouts/IconPostLayout";
import { PostLayout } from "@components/layouts/PostLayout";
import { SectionLayout } from "@components/layouts/SectionLayout";
import { TabPageLayout } from "@components/layouts/TabPageLayout";
import { Background } from "@components/patterns/Background";
import { Navbar } from "@components/patterns/Navbar";
import { Div } from "@components/primitives/Div";
import { Form } from "@components/primitives/Form";
import { Input } from "@components/primitives/Input";
import { Text } from "@components/primitives/Text";
import { CSSProp } from "@stitches.config";

interface Props {
  text: string;
}

const urls = {
  linkedIn: "https://www.linkedin.com/in/ahuounan/",
  mailTo: "mailto:on.alanhu@gmail.com",
  gmaps:
    "https://www.google.com/maps/place/London/@51.5287718,-0.2416802,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073535!4d-0.1277161"
};

export default function Contact(): JSX.Element {
  return (
    <TabPageLayout
      title="Contact"
      body={
        <SectionLayout title="Contact">
          <IconPostLayout>
            <Div css={styles.contactContainer}>
              <Div as="a" target="_blank" href={urls.linkedIn} css={styles.box}>
                <LinkedIn css={styles.icon} />
                <Text type="body">Alan Hu</Text>
              </Div>
              <Div as="a" target="_blank" href={urls.mailTo} css={styles.box}>
                <Mail css={styles.icon} />
                <Text type="body">on.alanhu@gmail.com</Text>
              </Div>
              <Div as="a" target="_blank" href={urls.gmaps} css={styles.box}>
                <LocationPin css={styles.icon} />
                <Text type="body">London, UK</Text>
              </Div>
            </Div>
          </IconPostLayout>

          <PostLayout title="Leave a Message">
            <Form>
              <Text as="label" type="body" htmlFor="fullName">
                Full Name
              </Text>
              <Input id="fullName" />
            </Form>
          </PostLayout>
        </SectionLayout>
      }
      navbar={<Navbar />}
      background={<Background />}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      text: "yo"
    }
  };
};

const styles: Record<string, CSSProp> = {
  icon: {
    height: "$4",
    width: "$4",
    marginBottom: "$0"
  },
  box: {
    flex: 1,
    flexBasis: "30%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    hoverFdbk: "$transparent",
    padding: "$0",
    borderRadius: "$2"
  },
  contactContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 $2"
  }
};
