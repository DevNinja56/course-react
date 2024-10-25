import React from 'react';

const UcasApplication = () => {
    return (
        <div className="w-full py-14 flex justify-center bg-gradient-to-b from-blueColor to-white via-blueColor h-[75vh] relative">
            <div className="flex flex-col gap-12 items-center">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="font-bold text-3xl text-white">
                        UCAS Application Support
                    </h1>
                    <p className="w-8/12 text-center text-white text-lg px-2 font-light">
                        Applying for undergraduate courses in the UK can be
                        challenging, but our UCAS Application Support makes it
                        easy. We guide you through each step of the process to
                        ensure your application is accurate and on time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UcasApplication;
