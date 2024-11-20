import { entryRequirementItems } from '@/types';
import React from 'react';
import Tabs from '../Tabs';
import { modalType } from '@/store/slices/ui.slice';
import { useUi } from '@/hooks/user-interface';

interface propsType {
    entryRequirements: entryRequirementItems;
    isUnderGraduate: boolean;
}

const EntryRequirements: React.FC<propsType> = ({
    entryRequirements,
    isUnderGraduate
}) => {
    const { updateModal } = useUi();
    const data = [
        ...(isUnderGraduate
            ? [
                  {
                      title: 'Local Year - 12',
                      element: (
                          <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                              {entryRequirements?.local_year_12 ? (
                                  entryRequirements?.local_year_12?.map(
                                      (item, index) => (
                                          <div
                                              className=""
                                              key={
                                                  'entry-requirement---' + index
                                              }
                                          >
                                              {item.qualification} require with{' '}
                                              {item.value} {item.grade} from{' '}
                                              {item.country}
                                          </div>
                                      )
                                  )
                              ) : (
                                  <>No data found</>
                              )}
                          </div>
                      )
                  },
                  {
                      title: 'A - Level',
                      element: (
                          <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                              {entryRequirements?.a_level ? (
                                  <div className="">
                                      {entryRequirements?.a_level} UCAS points
                                      required to get admission
                                  </div>
                              ) : (
                                  <>No data found</>
                              )}
                              <button
                                  onClick={() =>
                                      updateModal({
                                          type: modalType.ucas_calculator,
                                          state: {}
                                      })
                                  }
                                  className="bg-blueColor text-white px-3 py-2 rounded-md "
                              >
                                  UCAS Points Calculator
                              </button>
                          </div>
                      )
                  },
                  {
                      title: 'International Baccalaureate (IB)',
                      element: (
                          <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                              {entryRequirements?.ib ? (
                                  <div className="">
                                      {entryRequirements?.ib} (IB) points
                                      required to get admission
                                  </div>
                              ) : (
                                  <>No data found</>
                              )}
                          </div>
                      )
                  }
              ]
            : [
                  {
                      title: 'Bachelor Degree',
                      element: (
                          <div className="description w-full flex flex-col gap-3 md:gap-4 items-start">
                              {entryRequirements?.bachelor_degrees ? (
                                  entryRequirements?.bachelor_degrees?.map(
                                      (item, index) => (
                                          <div
                                              className=""
                                              key={
                                                  'entry-requirement---' + index
                                              }
                                          >
                                              {item.qualification} require with{' '}
                                              {item.value} {item.grade} from{' '}
                                              {item.country}
                                          </div>
                                      )
                                  )
                              ) : (
                                  <>No data found</>
                              )}
                          </div>
                      )
                  }
              ])
    ];
    return (
        <div>
            <Tabs data={data} />
        </div>
    );
};

export default EntryRequirements;
