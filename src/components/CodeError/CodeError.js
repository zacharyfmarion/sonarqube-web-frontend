import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { Tabs, Collapse } from 'antd';
const TabPane = Tabs.TabPane;

const Panel = Collapse.Panel;

type Props = {};

const Expand = ({ className }) =>
  <Flex align="center" justify="center" className={className}>
    <svg
      aria-hidden="true"
      height="16"
      version="1.1"
      viewBox="0 0 14 16"
      width="14"
    >
      <path
        fill-rule="evenodd"
        d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"
      />
    </svg>
  </Flex>;

@observer
class CodeError extends React.Component<Props> {
  // get number of keys of object with most keys from array
  getLargestObjectLength(array: Array<Object>) {
    const vals = array.map(a => a.code[Object.keys(a.code)[0]].length);
    return Math.max.apply(Math, vals);
  }

  // return least number of spaces before code begins in a line
  getDupLeastWhitespace = (code: Object) => {
    const key = Object.keys(code)[0];
    const vals = code[key].map(a => a.lastIndexOf('\t'));
    return Math.min.apply(Math, vals);
  };

  getLeastWhitespace = (code: Object) => {
    const vals = Object.keys(code).map(lineNumber =>
      code[lineNumber][0].lastIndexOf('\t')
    );
    return Math.min.apply(Math, vals);
  };

  // get the max line number from an array
  getMaxLineNumbers(duplication) {
    return duplication.map(file => {
      const startLine = Object.keys(file.code)[0];
      return parseInt(startLine) + file.code[startLine].length - 1;
    });
  }

  processDuplication = duplication => {
    let lines = [];
    for (let i = 0; i < duplication.length; i++) {
      for (let j = 0; j < this.getLargestObjectLength(duplication); j++) {
        const startLine = Object.keys(duplication[i].code)[0];
        const code =
          j < duplication[i].code[startLine].length
            ? duplication[i].code[startLine][j]
            : '';
        if (!lines[j]) lines.push([]);
        lines[j].push({
          lineNumber: parseInt(startLine) + j,
          code
        });
      }
    }
    return lines;
  };

  stripFilename = (path: string) => {
    if (path instanceof Array) path = path[0];
    return path.substring(path.indexOf(':', path.indexOf(':') + 1) + 1);
  };

  stripFilenameMobile = (path: string) => {
    if (path instanceof Array) path = path[0];
    return path.substring(path.lastIndexOf('/') + 1);
  };

  /**
   * Change the duplications from [[], []] to pairs of lines
   */
  processDuplications = (duplications: Array) => {
    return duplications.map(this.processDuplication);
  };

  // maxLines is an array containing the maximum line number
  // for each file
  renderDuplication = (dup, maxLines, dupNumber) => {
    const { ui, error: { duplications } } = this.props;
    const leastWhitespaces = duplications[dupNumber].map(item =>
      this.getDupLeastWhitespace(item.code)
    );
    return (
      <Flex column auto>
        {dup.map((lines, i) =>
          <Flex auto>
            {lines.map((line, j) =>
              <LineWrapper numFiles={ui.isDesktop ? dup[0].length : 1}>
                <LineNumber
                  align="center"
                  justify="center"
                  width={maxLines[j].toString.length * 5 + 30}
                >
                  {line.lineNumber}
                </LineNumber>
                <Line
                  auto
                  key={[i, j]}
                  dangerouslySetInnerHTML={{
                    __html: line.code.substring(leastWhitespaces[j] + 1)
                  }}
                />
              </LineWrapper>
            )}
          </Flex>
        )}
      </Flex>
    );
  };

  renderDuplications = () => {
    const { ui, error: { duplications } } = this.props;
    const processedDups = this.processDuplications(duplications);
    if (!ui.isDesktop) {
      return (
        <DuplicationTabs defaultActiveKey="0">
          {duplications[0].map((dup, i) =>
            <DuplicationTabPane
              tab={this.stripFilenameMobile(dup.loc)}
              key={`${i}`}
            >
              For now, you must be on a desktop to view duplicated code
            </DuplicationTabPane>
          )}
        </DuplicationTabs>
      );
    }
    return (
      <Flex column>
        {processedDups.map((duplication, i) =>
          <Flex column>
            <Duplication>
              {this.renderDuplication(
                duplication,
                this.getMaxLineNumbers(duplications[i]),
                i
              )}
            </Duplication>
            {i < processedDups.length - 1 &&
              <DuplicationSeparator>
                <PaddedExpand />
                <SeparatorMessage>Collapsed lines...</SeparatorMessage>
              </DuplicationSeparator>}
          </Flex>
        )}
      </Flex>
    );
  };

  render() {
    const {
      error: { path, message, code, duplications },
      className,
      ui
    } = this.props;
    let maxLine;
    try {
      maxLine = parseInt(Object.keys(code)[Object.keys(code).length - 1]);
    } catch (err) {
      maxLine = 100;
    }
    return (
      <Collapse defaultActiveKey={'0'} className={className}>
        <StyledPanel
          key="0"
          header={
            <RuleHeader column>
              <Pathname>
                {duplications
                  ? <Flex column={!ui.isDesktop}>
                      {duplications[0].map(file =>
                        <PathTitle
                          numFiles={ui.isDesktop ? duplications[0].length : 1}
                        >
                          {this.stripFilename(file.loc)}
                        </PathTitle>
                      )}
                    </Flex>
                  : this.stripFilename(path)}
              </Pathname>
              <ErrorMessage>
                {message}
              </ErrorMessage>
            </RuleHeader>
          }
        >
          {code &&
            Object.keys(code).map((lineNumber, i) =>
              <Flex>
                <LineNumber
                  align="center"
                  justify="center"
                  width={maxLine.toString().length * 5 + 30}
                >
                  {lineNumber}
                </LineNumber>
                <Line
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: code[lineNumber][0].substring(
                      this.getLeastWhitespace(code) + 1
                    )
                  }}
                />
              </Flex>
            )}
          {duplications && this.renderDuplications()}
        </StyledPanel>
      </Collapse>
    );
  }
}

const StyledPanel = styled(Panel)`
  .ant-collapse-content {
    padding: 0;
    border-top: 1px solid rgb(216, 216, 216);
  }
  .ant-collapse-content-box {
    padding: 0;
  }
`;

const DuplicationTabPane = styled(TabPane)`
  padding: 0 10px 10px 10px;
`;

const DuplicationTabs = styled(Tabs)`
  .ant-tabs-nav-scroll {
    overflow: scroll;
  }
  .ant-tabs-tab {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;

const PathTitle = styled(Flex)`
  padding-right: 10px;
  width: ${({ numFiles }) => `${100.0 / numFiles}%`};
`;

const SeparatorMessage = styled.span`
  font-family: monospace;
  line-height: 30px;
  margin-left: 5px;
  vertical-align: middle;
`;

const PaddedExpand = styled(Expand)`
  padding: 0 5px;
`;

const LineWrapper = styled(Flex)`
  width: ${({ numFiles }) => `${100.0 / numFiles}%`};
`;

const DuplicationSeparator = styled(Flex)`
  height: 30px;
  background: #f1f8ff;
`;

const Duplication = styled(Flex)`
`;

const ErrorMessage = styled.span`color: #f4766e;`;

const RuleHeader = styled(Flex)`
`;

const LineNumber = styled(Flex)`
  font-family: monospace;
  background: #f7f7f7;
  width: ${({ width }) => `${width}px`};
  text-align: center;
  margin-right: 3px;
`;

const Line = styled.pre`
  display: inline;
  font-family: monospace;
  font-size: 12px;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-all;
  tab-size: 15px;
  color: #000;
  .s {
    color: #d14;
  }
  .k {
    color: #0086b3;
  }
  .c {
    color: #099;
  }
  .sym {
    color: #ad7817;
  }
  .cd {
    color: gray;
  }
`;

const Pathname = styled.span`
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;

export default inject('ui')(CodeError);
