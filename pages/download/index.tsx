import DownloadHeader from "@components/Download/Header";
import Link from "next/link";
import config from "config.json";
import Adapt from "@components/UiKit/Adapt";
import styled from "styled-components";
import AddonsImage from "@public/download/download-addons.webp";
import Image from "@components/Image/Image";
import device from "@styles/utils/breakpoints";
import { AiOutlineDownload } from "react-icons/ai";

export const downloadLinks = {
  macos: `https://download.biolab.si/download/files/Orange3-${config.version}-Python3.9.12.dmg`,
  macosArm: `https://download.biolab.si/download/files/Orange3-${config.version}-Python3.9.12-arm64.dmg`,
  win: `https://download.biolab.si/download/files/Orange3-${config.version}-Miniconda-x86_64.exe`,
  portableOrange: `https://download.biolab.si/download/files/Orange3-${config.version}.zip`,
};

const StDownloadWrapper = styled.div`
  display: flex;
  gap: 112px;
  margin-bottom: 90px;
  font-size: 18px;
  color: ${({ theme }) => theme.blackLight1};

  @media ${device.M} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 240px;
  }

  h2 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 32px;
    margin-top: 64px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 6px;
    margin-top: 32px;
  }

  a {
    color: ${({ theme }) => theme.orange};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.orange};
    }
  }

  p {
    margin-bottom: 8px;
  }
`;

const StSmall = styled.p<{ $mt?: boolean }>`
  font-size: 16px;
  color: ${({ theme }) => theme.blackLight2};

  ${(props) => props.$mt && "margin-top: 28px;"}

  b {
    font-weight: 600;
  }
`;

const StLeftColumn = styled.div`
  flex: 2 1 auto;
`;

const StAside = styled.aside`
  flex-shrink: 0;
  margin-top: 120px;
  position: relative;
  width: 402px;

  img {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-20px, -135px) scale(1.2);

    &:nth-child(2) {
      transform: rotate(102deg) translate(-1px, -45px) scale(1.2);
    }
  }
`;

const StAsideContent = styled.div`
  z-index: 1;
  position: relative;
  background: #fff;
  padding: 45px;
  flex-direction: column;
  gap: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

const StAdapt = styled(Adapt)`
  overflow: hidden;
`;

const StLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
`;

const DownloadLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <StLink href={href}>
      <AiOutlineDownload />
      {text}
    </StLink>
  );
};

export default function Download() {
  return (
    <div>
      <DownloadHeader />

      <StAdapt>
        <StDownloadWrapper>
          <StLeftColumn>
            <div>
              <h2 id="win">Windows</h2>
              <h3>Standalone installer (default)</h3>

              <DownloadLink
                href={downloadLinks.win}
                text={`Orange3-${config.version}-Miniconda-x86_64.exe (64 bit)`}
              />

              <StSmall>Can be used without administrative priviledges.</StSmall>

              <h3>Portable Orange</h3>

              <DownloadLink
                href={downloadLinks.portableOrange}
                text={`Orange3-${config.version}.zip`}
              />

              <StSmall>
                No installation needed. Just extract the archive and open the
                shortcut in the extracted folder.
              </StSmall>
            </div>

            <div>
              <h2 id="mac">macOS</h2>

              <h3>Orange for Apple silicon</h3>
              <DownloadLink
                href={downloadLinks.macosArm}
                text={`Orange3-${config.version}-Python3.9.12-arm64.dmg`}
              />

              <h3>Orange for Intel</h3>

              <DownloadLink
                href={downloadLinks.macos}
                text={`Orange3-${config.version}-Python3.8.8.dmg`}
              />

              <StSmall $mt>
                <b>Not sure which installer to select?</b> Click the Apple logo
                in the top-left corner of your screen, select About This Mac,
                and check the Chip or Processor field. If you see Apple, select
                the Orange for Apple Silicon installer. If you see Intel, select
                the Orange for Intel.
              </StSmall>
            </div>

            <div>
              <h2>Other platforms</h2>
              <h3>Anaconda</h3>
              <p>
                If you are using python provided by Anaconda distribution, you
                are almost ready to go. Add conda-forge to the list of channels
                you can install packages from (and make it default)
              </p>
              <pre>
                <code>
                  conda config --add channels conda-forge conda config --set
                  channel_priority strict
                </code>
              </pre>
              <p>and run</p>
              <pre>
                <code>conda install orange3</code>
              </pre>

              <p>
                A universal bundle with everything packed in and ready to use.
              </p>

              <h3>Pip</h3>
              <p>
                Orange can also be installed from the Python Package Index. You
                may need additional system packages provided by your
                distribution.
              </p>
              <pre>
                <code>pip install orange3</code>
              </pre>

              <h3>Installing from source</h3>

              <p>
                Clone our repository from{" "}
                <a href="https://github.com/biolab/orange3">GitHub</a> or
                download the{" "}
                <a href="https://github.com/biolab/orange3/archive/stable.tar.gz">
                  source code tarball
                </a>
                . Then follow the instructions in{" "}
                <a href="https://github.com/biolab/orange3/blob/stable/README.md">
                  README.md
                </a>
              </p>

              <p>To run Orange Canvas run</p>
              <pre>
                <code>python -m Orange.canvas</code>
              </pre>
            </div>

            <div>
              <h2>Download archive</h2>
              Download older versions from{" "}
              <a
                href="https://download.biolab.si/download/files/"
                target="_blank"
                rel="noreferrer"
              >
                our archive
              </a>
              .
            </div>
          </StLeftColumn>

          <StAside>
            <Image
              src={AddonsImage.src}
              alt="Addons"
              width={AddonsImage.width}
              height={AddonsImage.height}
            />
            <Image
              src={AddonsImage.src}
              alt="Addons"
              width={AddonsImage.width}
              height={AddonsImage.height}
            />
            <StAsideContent>
              <h2>Installing add-ons</h2>
              <p>
                Additional features can be added to Orange by installing
                add-ons. You can find add-on manager in Options menu.
              </p>
            </StAsideContent>
          </StAside>
        </StDownloadWrapper>
      </StAdapt>
    </div>
  );
}
