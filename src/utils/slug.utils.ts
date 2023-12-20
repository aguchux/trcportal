import slugify from 'slugify';


export const toSlug = (text: string) => {
    return slugify(text, {
        replacement: '-',
        remove: /[*+~.(),\/'"!:@]/g,
        lower: true,
        strict: false, 
        locale: 'vi',
        trim: true
    });
}