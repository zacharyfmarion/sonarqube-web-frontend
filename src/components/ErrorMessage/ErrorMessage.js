// @flow
import * as React from 'react';
import { Flex } from 'reflexbox';
import { inject, observer } from 'mobx-react';
import { shadeColor } from 'helpers/colors';
import Text from 'components/Text';
import AppStore from 'stores/AppStore';
import styled from 'styled-components';

type Props = {
  /** The title of the error */
  title: string,
  /** The message to be displayed underneath the error */
  message: string,
};

type ServerErrorProps = {
  app: AppStore,
};

const ServerError = inject('app')(
  observer(({ app }: ServerErrorProps) => (
    <Server
      viewBox="-155 247 300 300"
      primaryColor={app.primaryColor}
      primaryLight={shadeColor(app.primaryColor, 0.5)}
    >
      <g id="XMLID_760_">
        <g id="XMLID_521_">
          <g id="XMLID_634_" className="st0">
            <path
              className="st1"
              d="M138.2,335.6h-276.3c-1.7,0-3.2-1.4-3.2-3.2V277c0-1.2,0.9-2.1,2.1-2.1h277.3c1.7,0,3.2,1.4,3.2,3.2v54.4
				C141.3,334.2,139.9,335.6,138.2,335.6z"
            />
          </g>
          <g id="XMLID_633_" className="st0">
            <path
              className="st1"
              d="M138.2,424.2h-276.3c-1.7,0-3.2-1.4-3.2-3.2v-55.4c0-1.2,0.9-2.1,2.1-2.1h277.3c1.7,0,3.2,1.4,3.2,3.2v54.4
				C141.3,422.8,139.9,424.2,138.2,424.2z"
            />
          </g>
          <g id="XMLID_635_" className="st0">
            <path
              className="st1"
              d="M138.2,514.9h-276.3c-1.7,0-3.2-1.4-3.2-3.2v-55.4c0-1.2,0.9-2.1,2.1-2.1h277.3c1.7,0,3.2,1.4,3.2,3.2v54.4
				C141.3,513.5,139.9,514.9,138.2,514.9z"
            />
          </g>
          <g id="XMLID_476_">
            <path
              className="st2"
              d="M135.6,339.2h-281.2c-5.2,0-9.4-4.2-9.4-9.4v-60.1c0-5.2,4.2-9.4,9.4-9.4h281.2c5.2,0,9.4,4.2,9.4,9.4v60.1
				C145,335,140.8,339.2,135.6,339.2z M-145.6,267.6c-1.2,0-2.1,0.9-2.1,2.1v60.1c0,1.2,0.9,2.1,2.1,2.1h281.2
				c1.2,0,2.1-0.9,2.1-2.1v-60.1c0-1.2-0.9-2.1-2.1-2.1H-145.6z"
            />
          </g>
          <g id="XMLID_522_">
            <path
              className="st2"
              d="M135.6,427.9h-281.2c-5.2,0-9.4-4.2-9.4-9.4v-60.1c0-5.2,4.2-9.4,9.4-9.4h281.2c5.2,0,9.4,4.2,9.4,9.4v60.1
				C145,423.7,140.8,427.9,135.6,427.9z M-145.6,356.3c-1.2,0-2.1,0.9-2.1,2.1v60.1c0,1.2,0.9,2.1,2.1,2.1h281.2
				c1.2,0,2.1-0.9,2.1-2.1v-60.1c0-1.2-0.9-2.1-2.1-2.1H-145.6z"
            />
          </g>
          <g id="XMLID_523_">
            <path
              className="st2"
              d="M135.6,518.6h-281.2c-5.2,0-9.4-4.2-9.4-9.4V449c0-5.2,4.2-9.4,9.4-9.4h281.2c5.2,0,9.4,4.2,9.4,9.4v60.1
				C145,514.3,140.8,518.6,135.6,518.6z M-145.6,446.9c-1.2,0-2.1,0.9-2.1,2.1v60.1c0,1.2,0.9,2.1,2.1,2.1h281.2
				c1.2,0,2.1-0.9,2.1-2.1V449c0-1.2-0.9-2.1-2.1-2.1H-145.6z"
            />
          </g>
          <g id="XMLID_625_">
            <path
              className="st2"
              d="M-117,356.3c-2,0-3.7-1.6-3.7-3.7v-17.1c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v17.1
				C-113.4,354.6-115,356.3-117,356.3z"
            />
          </g>
          <g id="XMLID_630_">
            <path
              className="st2"
              d="M-117,446.9c-2,0-3.7-1.6-3.7-3.7v-19c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v19
				C-113.4,445.3-115,446.9-117,446.9z"
            />
          </g>
          <g id="XMLID_631_">
            <path
              className="st2"
              d="M107,356.3c-2,0-3.7-1.6-3.7-3.7v-17.1c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v17.1
				C110.7,354.6,109.1,356.3,107,356.3z"
            />
          </g>
          <g id="XMLID_626_">
            <path
              className="st2"
              d="M107,446.9c-2,0-3.7-1.6-3.7-3.7v-19c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v19
				C110.7,445.3,109.1,446.9,107,446.9z"
            />
          </g>
          <g id="XMLID_742_">
            <path
              className="st2"
              d="M-127,314c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-123.3,312.3-125,314-127,314z"
            />
          </g>
          <g id="XMLID_743_">
            <path
              className="st2"
              d="M-111.6,314c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-107.9,312.3-109.6,314-111.6,314z"
            />
          </g>
          <g id="XMLID_744_">
            <path
              className="st2"
              d="M-96.2,314c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-92.5,312.3-94.2,314-96.2,314z"
            />
          </g>
          <g id="XMLID_745_">
            <path
              className="st2"
              d="M-80.8,314c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-77.2,312.3-78.8,314-80.8,314z"
            />
          </g>
          <g id="XMLID_746_">
            <path
              className="st2"
              d="M-65.4,314c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-61.8,312.3-63.4,314-65.4,314z"
            />
          </g>
          <g id="XMLID_751_">
            <path
              className="st2"
              d="M-127,408.1c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-123.3,406.5-125,408.1-127,408.1z"
            />
          </g>
          <g id="XMLID_750_">
            <path
              className="st2"
              d="M-111.6,408.1c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-107.9,406.5-109.6,408.1-111.6,408.1z"
            />
          </g>
          <g id="XMLID_749_">
            <path
              className="st2"
              d="M-96.2,408.1c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-92.5,406.5-94.2,408.1-96.2,408.1z"
            />
          </g>
          <g id="XMLID_748_">
            <path
              className="st2"
              d="M-80.8,408.1c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-77.2,406.5-78.8,408.1-80.8,408.1z"
            />
          </g>
          <g id="XMLID_747_">
            <path
              className="st2"
              d="M-65.4,408.1c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-61.8,406.5-63.4,408.1-65.4,408.1z"
            />
          </g>
          <g id="XMLID_756_">
            <path
              className="st2"
              d="M-127,493.3c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-123.3,491.7-125,493.3-127,493.3z"
            />
          </g>
          <g id="XMLID_755_">
            <path
              className="st2"
              d="M-111.6,493.3c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-107.9,491.7-109.6,493.3-111.6,493.3z"
            />
          </g>
          <g id="XMLID_754_">
            <path
              className="st2"
              d="M-96.2,493.3c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-92.5,491.7-94.2,493.3-96.2,493.3z"
            />
          </g>
          <g id="XMLID_753_">
            <path
              className="st2"
              d="M-80.8,493.3c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-77.2,491.7-78.8,493.3-80.8,493.3z"
            />
          </g>
          <g id="XMLID_752_">
            <path
              className="st2"
              d="M-65.4,493.3c-2,0-3.7-1.6-3.7-3.7v-21.2c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7v21.2
				C-61.8,491.7-63.4,493.3-65.4,493.3z"
            />
          </g>
          <g id="XMLID_632_">
            <circle className="st2" cx="110.8" cy="299.7" r="7.3" />
          </g>
          <g id="XMLID_758_">
            <circle className="st3" cx="91" cy="299.7" r="7.3" />
          </g>
          <g id="XMLID_762_">
            <circle className="st2" cx="110.8" cy="388.4" r="7.3" />
          </g>
          <g id="XMLID_759_">
            <circle className="st3" cx="91" cy="388.4" r="7.3" />
          </g>
          <g id="XMLID_772_">
            <circle className="st2" cx="110.8" cy="479.1" r="7.3" />
          </g>
          <g id="XMLID_766_">
            <circle className="st3" cx="91" cy="479.1" r="7.3" />
          </g>
        </g>
        <g id="XMLID_776_">
          <g id="XMLID_757_">
            <path
              className="st2"
              d="M-69.4,533.7h-55.2c-2,0-3.7-1.6-3.7-3.7c0-2,1.6-3.7,3.7-3.7h55.2c2,0,3.7,1.6,3.7,3.7
				C-65.7,532.1-67.4,533.7-69.4,533.7z"
            />
          </g>
          <g id="XMLID_775_">
            <path
              className="st2"
              d="M114.6,533.7H59.4c-2,0-3.7-1.6-3.7-3.7c0-2,1.6-3.7,3.7-3.7h55.2c2,0,3.7,1.6,3.7,3.7
				C118.3,532.1,116.6,533.7,114.6,533.7z"
            />
          </g>
        </g>
      </g>
    </Server>
  )),
);

/**
 * A small component that renders an svg error as well as a title and message
 * corresponding to the error
 */
const ErrorMessage = ({ title, message }: Props) => {
  return (
    <Flex auto justify="center" align="center" column>
      <ServerError />
      <h2>{title}</h2>
      <Text>{message}</Text>
    </Flex>
  );
};

const Server = styled.svg`
  width: 150px;
  padding-bottom: 15px;
  .st0 {
    opacity: 0.35;
  }
  .st1 {
    fill: ${({ primaryLight }) => primaryLight};
  }
  .st2 {
    fill: ${({ primaryColor }) => primaryColor};
  }
  .st3 {
    fill: #f9cf8c;
  }
`;

export default ErrorMessage;
