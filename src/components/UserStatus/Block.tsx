import React from 'react';

const UserBlock = () => {
    return (
        <div className="mt-[200px] container mx-auto ">
            <div className="bg-blueColor p-10 flex flex-col gap-5 justify-center items-center rounded-xl">
                <h1 className="text-2xl text-white">
                    Your account status is blocked
                </h1>
                <p className="text-white">Contact with your Administrator!</p>
            </div>
        </div>
    );
};

export default UserBlock;
