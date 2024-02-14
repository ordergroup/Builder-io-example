import {builder} from "@builder.io/sdk";
import {RenderBuilderContent} from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {
    const content = await builder
        .get("page", {
            userAttributes: {
                urlPath: '/builder-demo/'
            },
        })
        .toPromise();

    return (
        <>
            <RenderBuilderContent
                content={content}
            />
        </>
    );
}