// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SmallFontSizeMaxWidth } from 'consts';
import styled from 'styled-components';
import {
  borderPrimary,
  borderSecondary,
  buttonSecondaryBackground,
  cardBorder,
  networkColor,
  networkColorSecondary,
  textSecondary,
} from 'theme';

export const ActiveAccounWrapper = styled.div`
  width: 100%;

  .account {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    overflow: hidden;
    width: 100%;

    .icon {
      position: relative;
      top: 0.1rem;
      margin-right: 0.5rem;
    }
    .title {
      margin: 0;
      padding: 0;
      flex: 1;
      overflow: hidden;
    }
    .rest {
      flex: 1 1 0%;
      min-height: 1.8rem;
      overflow: hidden;
      position: relative;

      .name {
        position: absolute;
        left: 0;
        bottom: 0.1rem;
        max-width: 100%;
        display: inline;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        opacity: 0.75;
      }
    }

    button {
      background: ${buttonSecondaryBackground};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-left: 0.75rem;
      padding: 0;
    }

    h3 {
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex: 1;

      > .sep {
        border-right: 1px solid ${borderSecondary};
        margin: 0 0.8rem;
        width: 1px;
        height: 1.25rem;
      }
      > .addr {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      .copy {
        color: ${textSecondary};
        opacity: 0.7;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const SectionWrapper = styled.div<{ noPadding?: boolean }>`
  padding: ${(props) => (props.noPadding ? '0' : '0 1.25rem 0rem 1.25rem')};
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  .account {
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    button {
      color: ${textSecondary};
      margin-left: 0.5rem;
      opacity: 0.7;
    }

    .icon {
      position: relative;
      top: 0.1rem;
    }
    .title {
      margin: 0;
      padding: 0 0.5rem;
      flex: 1;
      overflow: hidden;
    }
    h4 {
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex: 1;

      > .sep {
        border-right: 1px solid ${borderSecondary};
        margin: 0 0.8rem;
        width: 1px;
        height: 1.25rem;
      }
      > .addr {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${textSecondary};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const Separator = styled.div`
  border-bottom: 1px solid ${borderPrimary};
  margin-top: 0.8rem;
  width: 100%;
  height: 1px;
`;

export const ReserveWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  margin-top: 1.75rem;
  padding: 0 0.75rem;

  > h4 {
    margin-top: 0.75rem;
    margin-bottom: 0.25rem;
    @media (min-width: ${SmallFontSizeMaxWidth + 1}px) {
      margin-top: 0.9rem;
    }
  }
  > .inner {
    display: flex;
    flex-flow: row wrap;
    margin: 0;

    > section {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      position: relative;

      &:first-child {
        overflow: hidden;
        padding-left: 0;

        .reserve {
          background: ${buttonSecondaryBackground};
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
          border-radius: 0.9rem;
          padding-top: 0.7rem;
          padding-bottom: 0.7rem;
          padding-left: 2.5rem;
          padding-right: 1.5rem;
          width: 100%;
          font-size: 1rem;

          .icon {
            position: absolute;
            top: 0.98rem;
            left: 0.95rem;
          }
        }
      }

      .help-icon {
        margin-left: 0.6rem;
      }
    }
  }
`;

export const BalanceChartWrapper = styled.div`
  width: 100%;
  padding: 0 1.75rem;
  margin: 1rem 0;

  .chart {
    background: ${buttonSecondaryBackground};
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 3.25rem;
    border-radius: 0.9rem;
    overflow: hidden;

    &.main {
      border: ${cardBorder} ${borderPrimary};
    }
    > div {
      height: 100%;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      font-size: 1rem;
      padding: 0 1rem;
      > span {
        font-variation-settings: 'wght' 550;
      }
    }
  }

  .legend {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    > section {
      padding: 0 1rem;
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      > h4 {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        > span {
          width: 1rem;
          height: 1rem;
          border-radius: 0.25rem;
          margin-right: 0.6rem;
        }
      }
      &:first-child {
        padding-left: 0;
      }
    }
  }
  .available {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2.5rem;
    > div {
      display: flex;
      flex-flow: row wrap;
      &:first-child {
        padding-right: 0.5rem;
      }
      &:last-child {
        padding-left: 0.5rem;
      }
      > h4 {
        margin: 0.5rem 0 0.8rem 0;
        padding: 0 0.2rem;
      }
    }
  }
  .d1 {
    color: white;
    background: ${networkColor};
  }
  .d2 {
    color: white;
    background: ${networkColorSecondary};
  }
  .d3 {
    color: white;
    background: ${textSecondary};
  }
  .d4 {
    color: ${textSecondary};
    background: ${buttonSecondaryBackground};
  }
`;
