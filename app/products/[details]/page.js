
export default async function ProductDetails({ params }) {
      const {details}  = await params;
    return <>
        <div>I am Details Dynamic Page. The Value is: {details}</div>
    </>
}