export const PhoneNumberValidate = (phone_number: string) => {
    const prefixMap: { [key: string]: string } = {
        '03': '+923',
        '0092': '+92',
        '92': '+92',
        '3': '+923'
    };

    for (const [prefix, value] of Object.entries(prefixMap)) {
        if (phone_number.startsWith(prefix)) {
            return value + phone_number.substring(prefix.length);
        }
    }

    return phone_number;
};
