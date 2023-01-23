import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Layout } from '../../components/Layout/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <VStack>
        <Flex direction="column" justify="center" align="center" w="80%">
          <Heading>Privacy Policy</Heading>
          <Text pt="1rem">
            `EnhanceAI ("we", "our", or "us") is committed to protecting the
            privacy of our users ("you", "your"). This Privacy Policy ("Policy")
            explains how we collect, use, and share information about you when
            you use our website, located at [insert URL], and any other online
            products and services that link to this Policy (collectively, the
            "Services"). 
            <br />
            <br />
            By using our Services, you agree to the collection,
            use, and sharing of your information as described in this Policy. If
            you do not agree with our policies and practices, do not use our
            Services. We may change our policies and practices from time to
            time, and we encourage you to review this Policy whenever you access
            our Services. If we make changes, we will post the updated Policy on
            this page and update the "Effective Date" at the top of the Policy.
            If we make material changes, we will provide you with additional
            notice (such as adding a statement to our homepage or sending you a
            notification). 
            <br />
            <br />
            Please read this Policy carefully to understand our
            policies and practices regarding your information and how we will
            treat it. Information We Collect and How We Collect It We collect
            several types of information from and about users of our Services,
            including: Information you provide to us directly: We collect
            information that you provide to us directly, such as when you create
            an account, fill out a form, or communicate with us. This
            information may include your name, email address, phone number, and
            other contact information. Information we collect automatically:
            <br />
            <br />
            When you use our Services, we may collect certain information
            automatically from your device. This information may include your IP
            address, device type, browser type, operating system, and
            information about your use of our Services. How We Use Your
            Information We use the information we collect from and about you to:
            Provide, maintain, and improve our Services; Communicate with you,
            including responding to your requests and inquiries; Personalize
            your experience by providing content and features that are most
            relevant to you; Monitor and analyze trends, usage, and activities
            in connection with our Services; and Protect, investigate, and
            prevent fraudulent, unauthorized, or illegal activities. Sharing of
            Your Information We may share your information as follows: With
            third parties who perform services on our behalf: We may share your
            information with third parties who perform services on our behalf,
            such as website hosting, data analysis, payment processing, and
            customer service. 
            <br />
            <br />
            These third parties are required to maintain the
            confidentiality of your information and are prohibited from using it
            for any other purpose. With law enforcement or in response to legal
            requests: We may disclose your information to law enforcement or
            government agencies, or in response to legal requests, in order to
            comply with legal obligations or to protect the rights, property, or
            safety of us, our users, or others. With affiliates: We may share
            your information with our affiliates for the purposes described in
            this Policy. With business partners: We may share your information
            with our business partners for the purposes described in this
            Policy. In connection with a merger, acquisition, or sale of assets:
            If we are involved in a merger, acquisition, or sale of assets, we
            may share your information with the other party or parties involved
            in the transaction. 
            <br />
            <br />
            Your Choices You have the following choices
            regarding the information we collect and how we use it: Opt out of
            email communications: You may opt out of receiving promotional
            emails from us by following the instructions in those emails. If you
            opt out, we may still send you non-promotional`
          </Text>
        </Flex>
      </VStack>
    </Layout>
  );
};
