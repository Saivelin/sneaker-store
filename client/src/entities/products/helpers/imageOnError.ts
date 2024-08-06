export const onErrorImage = (e: any) => {
    e.target.src = process.env.NEXT_PUBLIC_API_UPLOAD_ENDPOINT + '/defaultProductImage.png'
}
