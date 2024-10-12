import React from 'react';
import { useGetScholarshipQuery } from '@/store/slices/allRequests';
import Slider3D from './3dSlider';
import Card from '../Scholarship/Card';

function ScholarshipSlider() {
    const { data: scholarshipList } = useGetScholarshipQuery();

    return (
        <div className="py-5 container">
            <Slider3D
                totalItems={7}
                data={
                    scholarshipList?.map((scholarship) => ({
                        component: Card,
                        props: {
                            name: scholarship.name,
                            title_description: scholarship.title_description,
                            type: scholarship.type,
                            degree: scholarship.degree,
                            institute: scholarship.institute,
                            country: scholarship.country,
                            amount: scholarship.amount,
                            id: scholarship.id,
                            image: scholarship.image,
                            isFavBtn: false
                        }
                    })) ?? []
                }
            />
        </div>
    );
}

export default ScholarshipSlider;
