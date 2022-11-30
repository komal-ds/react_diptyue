import { useAnswersState, useAnswersActions, DisplayableFacetOption, DisplayableFacet} from '@yext/answers-headless-react'
import * as React from 'react';
import { CompositionMethod,useComposedCssClasses } from '../hooks/new';
import { CheckboxOptionCssClasses } from './utils/renderCheckboxOption';


export type onFacetChangeFn = (fieldId: string, option: DisplayableFacetOption) => void


export interface FacetConfig {
  searchable?: boolean,
  placeholderText?: string,
  label?: string,
  collapsible?: boolean,
  defaultExpanded?: boolean
}

export interface FacetCssClasses extends CheckboxOptionCssClasses {
  label?: string,
  labelIcon?: string,
  labelContainer?: string,
  optionsContainer?: string,
  searchableInputElement?: string
}



interface FacetsProps {
  searchOnChange?: boolean,
  searchable?: boolean,
  collapsible?: boolean,
  defaultExpanded?: boolean,
  facetConfigs?: Record<string, FacetConfig>,
  customCssClasses?: FacetsCssClasses,
  cssCompositionMethod?: CompositionMethod
}
interface FacetsCssClasses extends FacetCssClasses {
  container?: string,
  divider?: string,
  buttonsContainer?: string,
  button?: string
}

const builtInCssClasses: FacetsCssClasses = {
  searchableInputElement: 'text-sm bg-white h-9 w-full outline-none p-2 mb-2 rounded-md border border-gray-300 focus:border-blue-600',
  container: 'md:w-40',
  buttonsContainer: 'flex justify-between mt-5',
  button: 'border border-gray-300 px-2.5 py-1 rounded-md',
  divider: 'w-full h-px bg-gray-200 my-4'
}

export default function Facets (props: FacetsProps): JSX.Element {
  const { 
    searchOnChange,
    facetConfigs = {},
    customCssClasses,
    cssCompositionMethod
  } = props;
  const cssClasses = useComposedCssClasses(builtInCssClasses, customCssClasses, cssCompositionMethod);
  const facets = useAnswersState(state => state.filters?.facets) || [];

  const answersActions = useAnswersActions();
  const executeSearch = () => answersActions.executeVerticalQuery();

  const handleResetFacets = () => {
    answersActions.resetFacets();
    if (searchOnChange) { 
      executeSearch();
    }
  }


  const facetComponents = facets
    .filter(facet => facet.options?.length > 0)
    .map((facet, index, facetArray) => {
      const overrideConfig = facetConfigs?.[facet.fieldId] ?? {};
    });
  return (
    <div className={cssClasses.container}>
      <div>
        {facetComponents}
      </div>
      <div className={cssClasses.buttonsContainer}>
        {!searchOnChange && <button onClick={executeSearch} className={cssClasses.button}>Apply</button>}
        <button onClick={handleResetFacets} className={cssClasses.button}>Reset all</button>
      </div>
    </div>
  )
}
