import React from 'react';
import Draggable from 'react-draggable';
import { useUi } from '@/hooks/user-interface';
import { modalType } from '@/store/slices/ui.slice';

export default function BestFitTool() {
    const { updateModal } = useUi();

    return (
        <Draggable>
            <div className="h-full w-full flex flex-col items-center cursor-pointer">
                <button
                    onClick={() => {
                        updateModal({
                            type: modalType.best_fit_tool,
                            state: {}
                        });
                    }}
                >
                    <div className="relative">
                        <span className="absolute right-[1.5rem] w-12 h-12 rounded-full bg-blueColor opacity-75 animate-ping top-6"></span>
                        <img
                            src="/images/BestFitTool/BestFitTool.png"
                            alt="Best Fit Tool"
                            className="animate-[wiggle_1s_ease-in-out_infinite]"
                        />
                    </div>
                </button>
            </div>
        </Draggable>
    );
}
