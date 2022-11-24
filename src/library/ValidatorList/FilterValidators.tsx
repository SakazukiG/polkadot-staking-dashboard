// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFilters } from 'contexts/Filters';
import { FilterType } from 'contexts/Filters/types';
import { Title } from 'library/Overlay/Title';
import { FilterListButton, FilterListWrapper } from 'library/Overlay/Wrappers';
import { useValidatorFilters } from '../Hooks/useValidatorFilters';

export const FilterValidators = () => {
  const { getFilters, toggleFilter } = useFilters();
  const { filtersToLabels } = useValidatorFilters();

  const excludes = getFilters(FilterType.Exclude, 'validators');

  return (
    <FilterListWrapper>
      <Title title="Filter Validators" />
      <div className="body">
        {Object.entries(filtersToLabels).map(([f, l]: any, i: number) => (
          <FilterListButton
            active={excludes?.includes(f) ?? false}
            key={`validator_filter_${i}`}
            type="button"
            onClick={() => {
              toggleFilter(FilterType.Exclude, 'validators', f);
            }}
          >
            <FontAwesomeIcon
              transform="grow-5"
              icon={excludes?.includes(f) ? faCheckCircle : faCircle}
            />
            <h4>{l}</h4>
          </FilterListButton>
        ))}
      </div>
    </FilterListWrapper>
  );
};
