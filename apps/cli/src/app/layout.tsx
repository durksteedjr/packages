import "../../index.css";

import {
  Box,
  Container,
  Grid,
  LinkBadge,
  OverlayGradient,
  OverlayGrid,
  Wrapper
} from "@durksteedjr/ui";
import type { LayoutProps } from "@internal/sdk";
import { links } from "@internal/sdk";
import { Nunito_Sans } from "next/font/google";

import {
  links as libLinks,
  metadata as libMetadata
} from "../lib";

export const metadata = libMetadata;

const nunitoSans = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito-sans"
});

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body className={nunitoSans.className}>
      <Wrapper>
        <OverlayGradient />
        <OverlayGrid />
        <Box className="px-6 py-12 md:py-24">
          <Container>
            <nav>
              <Grid className="mb-6 gap-4 sm:grid-cols-2 md:mb-8">
                {[libLinks.gitHub, libLinks.npm].map((link) => (
                  <LinkBadge
                    href={link.href}
                    isOutlineArrowUpRight
                    key={link.text}
                    target="_blank"
                  >
                    {link.text}
                  </LinkBadge>
                ))}
              </Grid>
            </nav>
            <main>{children}</main>
            <footer>
              <Grid className="mt-24 gap-4 sm:grid-cols-2 md:mt-32">
                {[links.durkSteedJr, libLinks.mitLicense].map(
                  (link) => (
                    <LinkBadge
                      href={link.href}
                      isOutlineArrowUpRight
                      key={link.text}
                      target="_blank"
                    >
                      {link.text}
                    </LinkBadge>
                  )
                )}
              </Grid>
            </footer>
          </Container>
        </Box>
      </Wrapper>
    </body>
  </html>
);

export default Layout;
