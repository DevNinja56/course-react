import Pusher from 'pusher-js';

export const usePusher = () => {
    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY ?? '';
    const pusher = new Pusher(pusherKey, {
        cluster: 'ap2'
    });

    const chatChannel = pusher.subscribe(`chat`);

    const initialPusher = () => {
        console.log('Pusher Initialized');
    };

    return { pusher, initialPusher, chatChannel };
};
