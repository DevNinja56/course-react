import React, { useState } from 'react';
import Select from 'react-select';
import { IoMdClose } from 'react-icons/io';
import { useUi } from '@/hooks/user-interface';
import { useGetCountriesQuery } from '@/store/slices/allRequests';
import { fetchRequest } from '@/utils/axios/fetch';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import Button from '@/components/Button';
import { useCompare } from '@/hooks/compare';
import {
    countryType,
    degreeType,
    // disciplineType,
    instituteType,
    singleCourseType,
    specializationType
} from '@/types';

interface compareDataType {
    country: countryType | null;
    institute: instituteType | null;
    // discipline: disciplineType | null;
    degreeLevel: degreeType | null;
    specialization: specializationType | null;
    course: singleCourseType | null;
}

interface dataType {
    institute: instituteType[] | [];
    // discipline: disciplineType[] | [];
    degreeLevel: degreeType[] | [];
    specialization: specializationType[] | [];
    course: singleCourseType[] | [];
}

const CompareUniversityModal = () => {
    const { hideModal, modalState } = useUi();
    const { data: country, isLoading: countryLoading } = useGetCountriesQuery();
    const [isLoading, setIsLoading] = useState(false);
    const { compareFirst, compareSecond, compareThird } = useCompare();
    const { index } = modalState as { index: 'first' | 'second' | 'third' };
    const [data, setData] = useState<dataType>({
        institute: [],
        // discipline: [],
        degreeLevel: [],
        specialization: [],
        course: []
    });
    const [compareData, setCompareData] = useState<compareDataType>({
        country: null,
        institute: null,
        // discipline: null,
        degreeLevel: null,
        specialization: null,
        course: null
    });

    const fetchAndSetData = (
        url: string,
        field:
            | 'institute'
            // | 'discipline'
            | 'degreeLevel'
            | 'specialization'
            | 'course'
    ) => {
        setIsLoading(true);
        fetchRequest({ url })
            .then(({ data }) => {
                setData((prev) =>
                    field === 'institute'
                        ? {
                              institute: data,
                              //   discipline: [],
                              degreeLevel: [],
                              specialization: [],
                              course: []
                          }
                        : // : field === 'discipline'
                        //   ? {
                        //         institute: prev.institute,
                        //         discipline: data,
                        //         degreeLevel: [],
                        //         specialization: [],
                        //         course: []
                        //     }
                        field === 'degreeLevel'
                        ? {
                              institute: prev.institute,
                              //   discipline: prev.discipline,
                              degreeLevel: data,
                              specialization: [],
                              course: []
                          }
                        : field === 'specialization'
                        ? {
                              institute: prev.institute,
                              // discipline: prev.discipline,
                              degreeLevel: prev.degreeLevel,
                              specialization: data,
                              course: []
                          }
                        : {
                              institute: prev.institute,
                              // discipline: prev.discipline,
                              degreeLevel: prev.degreeLevel,
                              specialization: prev.specialization,
                              course: data
                          }
                );
            })
            .finally(() => setIsLoading(false));
    };

    const isDisabledButton =
        !country ||
        data.institute.length < 1 ||
        // data.discipline?.length < 1 ||
        data.degreeLevel.length < 1 ||
        data.course.length < 1;

    return (
        <div className="bg-white modal relative border-[3px] border-[#CCCCCC] p-5 rounded-xl setWidthCompareModal">
            <IoMdClose
                className="absolute top-3 right-3 cursor-pointer"
                onClick={hideModal}
            />

            <h1 className="text-mainTextColor text-center font-bold text-2xl md:text-[36px] mb-5">
                Select a Course
            </h1>
            <div className="flex flex-col gap-y-4 mb-7 w-full">
                <Select
                    isSearchable
                    name="country"
                    isClearable={false}
                    isLoading={countryLoading}
                    isDisabled={!country || country?.length < 1}
                    placeholder="Select Country"
                    options={country?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.INSTITUTE_WITH_COUNTRY_ID.replace(
                                ':id',
                                e?.value ?? ''
                            ),
                            'institute'
                        );
                        setCompareData({
                            ...compareData,
                            country: country
                                ? country?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                />
                <Select
                    isSearchable
                    name="institute"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data?.institute.length < 1}
                    placeholder="Select Institute"
                    options={data?.institute?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.DEGREE_WITH_INSTITUTE_ID.replace(
                                ':id',
                                e?.value ?? ''
                            ),
                            'degreeLevel'
                        );
                        setCompareData({
                            ...compareData,
                            institute: data?.institute
                                ? data?.institute?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                />
                {/* <Select
                    isSearchable
                    name="discipline"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data?.discipline?.length < 1}
                    placeholder="Select Discipline"
                    options={data?.discipline?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.DEGREE_LEVELS_WITH_DISCIPLINE_ID.replace(
                                ':id',
                                e?.value ?? ''
                            ),
                            'degreeLevel'
                        );
                        setCompareData({
                            ...compareData,
                            discipline: data?.discipline
                                ? data?.discipline?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                /> */}
                {/* <Select
                    isSearchable
                    name="discipline"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data?.discipline?.length < 1}
                    placeholder="Select Discipline"
                    options={data?.discipline?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.DEGREE_LEVELS_WITH_DISCIPLINE_ID.replace(
                                ':id',
                                e?.value ?? ''
                            ),
                            'degreeLevel'
                        );
                        setCompareData({
                            ...compareData,
                            discipline: data?.discipline
                                ? data?.discipline?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                /> */}
                <Select
                    isSearchable
                    name="degreeLevel"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data.degreeLevel.length < 1}
                    placeholder="Select Degree Level"
                    options={data?.degreeLevel?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.SPECIALIZATION.replace(
                                ':id',
                                e?.value ?? ''
                            ),
                            'specialization'
                        );
                        setCompareData({
                            ...compareData,
                            degreeLevel: data?.degreeLevel
                                ? data?.degreeLevel?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                />
                <Select
                    isSearchable
                    name="specialization"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data.specialization.length < 1}
                    placeholder="Select Specialization"
                    options={data?.specialization?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.COURSES_WITH_DEGREE.replace(
                                ':degreeId',
                                compareData?.degreeLevel?.id ?? ''
                            ).replace(
                                ':instituteId',
                                compareData?.institute?.id ?? ''
                            ),
                            'course'
                        );
                        setCompareData({
                            ...compareData,
                            specialization: data?.specialization
                                ? data?.specialization?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                />
                {/* <Select
                    isSearchable
                    name="discipline"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data?.discipline.length < 1}
                    placeholder="Select Discipline"
                    options={data?.discipline?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        fetchAndSetData(
                            API_ENDPOINTS.DEGREE_LEVELS_WITH_DISCIPLINE_ID.replace(
                                ':id',
                                e?.value ?? ''
                            ),
                            'degreeLevel'
                        );
                        setCompareData({
                            ...compareData,
                            discipline: data?.discipline
                                ? data?.discipline?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                /> */}

                <Select
                    isSearchable
                    name="course"
                    isClearable={false}
                    isLoading={isLoading}
                    isDisabled={data.course.length < 1}
                    placeholder="Select Course"
                    options={data?.course?.map(({ name, id }) => ({
                        label: name,
                        value: id
                    }))}
                    onChange={(e) => {
                        setCompareData({
                            ...compareData,
                            course: data?.course
                                ? data?.course?.filter(
                                      ({ id }) => id === e?.value ?? ''
                                  )[0]
                                : null
                        });
                    }}
                />
            </div>
            <Button
                className="pt-[14px] pb-[13px]"
                text="Compare"
                disabled={isDisabledButton}
                onClick={() => {
                    !isDisabledButton &&
                        (index === 'first'
                            ? compareFirst(compareData)
                            : index === 'second'
                            ? compareSecond(compareData)
                            : index === 'third'
                            ? compareThird(compareData)
                            : null);
                    hideModal();
                }}
            />
        </div>
    );
};

export default CompareUniversityModal;
