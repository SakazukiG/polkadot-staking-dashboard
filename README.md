# Polkadot Staking Dashboard

#### Staging (Latest Version):
https://paritytech.github.io/polkadot-staking-dashboard

#### Production:
https://staking.polkadot.network

<img width="1744" alt="Screenshot 2022-12-20 at 13 46 30" src="https://user-images.githubusercontent.com/13929023/208601280-5a06b7cb-141e-42c8-a278-50cd4dec018d.png">

# Validator Operator Setup Guide

Validator operators can add their contact information, icon, and which validators they operate, to the dashboard’s Community section. The Community feature is designed to give non-biased exposure to validator operators, and to host a fully-featured validator browser just for that operator's validators.

To add an operator, submit a PR with the following changes:

- **Thumbnail:** Add your operator's thumbnail as an SVG Component in [this folder](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/config/validators/thumbnails).
- **Operator details:** Add your operator details to the `VALIDATORS_COMMUNITY`JSON object in [this file](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/config/validators/index.ts).

## Operator Structure
 
The following table outlines the structure of a `VALIDATOR_COMMUNITY` entry:

| Element | Key | Required | Notes | Example
| ------- | --- | -------- | ----- | ------- |
| Operator Name  | `name` | Yes | The chosen name of the operator. | `Validator Central` |
| Thumbnail Name | `thumbnail` | Yes | The name of your SVG component representing your thumbnail.  | *See Below* | 
| Bio  | `bio` | No | A short description of your entity. Maximum 300 characters. | `Summing up my validator identity in a sentence or so.` |
| Email Address  | `email` | No | A public email address representing the operator. | `validatorcentral@parity.io` |
| Twitter Handle | `twitter` | No | The Twitter handle representing the operator.  | `@ParityTech` |
| Website URL | `website` | No |  A live and vlid secure URL to your website. | `https://parity.io` |
| Validator List | `validators` | Yes |  A list of validators grouped by network. At least 1 validator in 1 network must be defined. | *See Below* |

## Example Operator

Upload your SVG icon as a React component. Look at the existing icons as examples, or use the [SVGR Playground](https://react-svgr.com/playground/) to convert your raw SVG file into a component.

Next, add your operator details to the `VALIDATOR_COMMUNITY` object. Only provide the validator(s) for the particular network(s) you are operating in. If you have no operating validators on Kusama, for example, the `kusama` key can be omitted.

The following example defines 2 validators on the Polkadot network, and 1 on Kusama:

```
export const VALIDATOR_COMMUNITY = [
  ...
  {
    name: 'Validator Central',
    thumbnail: 'ValidatorCentral',
    bio: 'Summing up my validator identity in a sentence or so. Maximum 300 characters.',
    email: 'validatorcentral@parity.io',
    twitter: '@ParityTech',
    website: 'https://parity.io',
    validators: {
      polkadot: [
      '1hYiMW8KSfUYChzCQSPGXvMSyKVqmyvMXqohjKr3oU5PCXF', 
      '14QSBoJMHF2Zn2XEoLNSeWgqBRr8XoKPy4BxToD6yLSeFFYe'
      ],
      kusama: ['FykhnPA3pn269LAcQ8VQKDgUQ8ieAaSLwJDhAVhu3dcokVR'],
    },
  },
  ...
];

```

## General Requirements

| Requirement | Notes
| ----------- | ----- |
| Accuracy | Operator contact details must be working and valid. |
| Liveness | All submitted validator addresses must be discoverable as a validator on the network in question - whether Polkadot or Kusama. |
| Ordering | Please place your operator in alphabetical order within `VALIDATOR_COMMUNITY`. Operators are shuffled before being displayed in the dashboard, removing any bias associated with ordering methods. |

Please submit an issue for any queries around adding your operator details.

# Contribution Guide

## Introduction
This section aims to familiarise developers to the Polkadot Staking Dashboard [[GitHub](https://github.com/paritytech/polkadot-staking-dashboard), [Demo](https://paritytech.github.io/polkadot-staking-dashboard/#/overview)] for the purpose of contributing to the project.

Reach out to ross@parity.io for clarification of any content within this document.

## Major Packages Used

- React 18
- Polkadot JS API [[docs](https://polkadot.js.org/docs/api)]
- React Chart JS 2 for graphing. [[docs](https://www.chartjs.org/docs/latest/), [React docs](https://react-chartjs-2.js.org/)]
- Framer Motion. [[docs](https://www.framer.com/docs/animation/)]
- [Font Awesome](https://fontawesome.com/v5/search) for the majority of icons. [Ionicons](https://ionic.io/ionicons) for side menu footer icons
- Downshift for dropdowns [[docs](https://www.npmjs.com/package/downshift)]
- Styled Components [[docs](https://styled-components.com/docs)] alongside Styled Theming [[docs](https://www.npmjs.com/package/styled-theming)] for theme configuration.

## Environment Variables
Optionally apply the following envrionment variables in an environment file such as `.env` or with `yarn build` to customise the build of staking dashboard:
```
# disable all mentioning of fiat values and token prices
REACT_APP_DISABLE_FIAT=1

# display an organisation label in the network bar
REACT_APP_ORGANISATION="© Parity Technologies"

# provide a privacy policy url in the network bar
REACT_APP_PRIVACY_URL=https://www.parity.io/privacy/
```
## Config Files
There are some ad-hoc files defining app configuration where needed. These just provide a means of bootstrapping app data, and further abstraction could be explored in the future.
- [`config/pages.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/config/pages.ts): provides the pages and page categories of the app.
- [`config/help.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/config/help.ts): provides the help content.
- [`Utils.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/Utils.ts): Various general helper functions used throughout the app, such as formatting utilities.

## Folders

Folders are structured in the [`src/`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src) directory to separate functional, presentational and context components:
- [`contexts`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/contexts): context providers for the app. All Polkadot JS API interaction happens in these files.
- [`img`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/img): app SVGs.
- [`library`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/library): reusable components that could eventually be abstracted into a separate UI library.
- [`modals`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/modals): the various modal pop-ups used in the app.
- [`pages`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/pages): similar to modals, page components and components that comprise pages.
- [`theme`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/theme): the theming configuration of the app.
- [`workers`](https://github.com/paritytech/polkadot-staking-dashboard/tree/master/src/workers): web workers that crunch process-heavy scripts. Only one exists right now, that iterates `erasStakers` and calculates active nominators and minimum nomination bond.

## App Entry

Going from the top-most component, the component hierarchy is set up as follows:
- [`index.tsx`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/index.tsx): DOM render, of little interest.
- [`App.tsx`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/App.tsx): wraps `<App />` in the theme provider context and determines the active network from local storage.
- [`Providers.tsx`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/Providers.tsx): imports and wraps `<Router />` with all the contexts using a withProviders hook. We also wrap styled component's theme provider context here to make the theme configuration work.
- [`Router.tsx`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/Router.tsx): contains react router `<Route>`'s, in addition to the major app presentational components. Beyond `<Route>` components, this file is also the entry point for the following components:
  - `<Modal />`: top-level of the modal.
  - `<Help />`: top-level of the help module.
  - `<Headers />`: fixed header of the app containing the stash / controller and accounts toggle buttons.
  - `<NetworkBar />`: fixed network bar at the bottom of the app.
  - `<Notifications />`: smaller context-based popups. Currently used on click-to-copy, or to display extrinsic status (pending, success).

## Development Patterns

Documenting some of the development patterns used:

- We use the **"Wrapper" terminology for styled components** that wrap a functional component.
- **Styles are defined on a per-component basis**, being defined in the same folder as the component markup itself. Where unavoidable (such as global styles, interface layout), styled components should reside in [`src/Wrappers.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/Wrappers.tsx).
- **Theme values** can be either directly imported into styled components, from [`theme/index.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/theme/index.ts), or as raw values within component files using [`theme/default.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/theme/default.ts).
- **Constants or default values** (such as those waiting for Polkadot API) are defined in [`src/constants.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/constants.ts).
- Packages with **missing TypeScript definitions** can be declared in [`src/react-app-env.d.ts`](https://github.com/paritytech/polkadot-staking-dashboard/blob/master/src/react-app-env.d.ts).

## TypeScript Support

The majority of components have types. Type additions are welcome for data that makes sense to type (e.g. data that is unlikely to change as we continue development).

We develop in strict mode, so types are always required for objects. Use any initially to adhere to this requirement.

## Testing Support State

**Tests have not yet been developed.**

Testing could be initialised on a per-component basis, such as isolating library components and testing them within a storybook environment.

Integration tests make sense for the app itself, ensuring the page layout, help module, and modals display the correct content at various app states. These states currently persist of:

- Connecting to the network, fetching from API, fully synced.
- Actively staking, not actively staking.
- Account connected, no account connected.

# Presentations

- 30/06/2022: [[Video] Polkadot Decoded 2022: Polkadot Staking Dashboard Demo](https://youtu.be/H1WGu6mf1Ls)
