import {builder} from "@builder.io/sdk";
import {RenderBuilderContent} from "@/components/builder";
import {useSelector} from "react-redux";
import {appSelectors} from "@/store/appSelectors";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Login() {
    const content = await builder
        // Get the page content from Builder with the specified options
        .get("page", {
            userAttributes: {
                // Use the page path specified in the URL to fetch the content
                urlPath: '/login/'
            },
        })
        // Convert the result to a promise
        .toPromise();

    return (
        <>
            {/* Render the Builder page */}
            <RenderBuilderContent
                content={content}
            />
        </>
    );
}