"use client";
import {BuilderComponent, useIsPreviewing} from "@builder.io/react";
import {BuilderContent, builder} from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";
import {BuilderComponentProps} from "@builder.io/react/src/components/builder-component.component";
import {useDispatch, useSelector} from "react-redux";
import {appSliceActions} from "@/store/appSlice";
import {appSelectors} from "@/store/appSelectors";
import {useRouter} from "next/navigation";

interface BuilderPageProps {
    content?: BuilderContent;
    context?: BuilderComponentProps['context']
}

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({content, context}: BuilderPageProps) {
    const dispatch = useDispatch();
    const router = useRouter();

    const isChartDataLoading = useSelector(appSelectors.isChartDataLoading);

    // Call the useIsPreviewing hook to determine if
    // the page is being previewed in Builder
    const isPreviewing = useIsPreviewing();
    // If "content" has a value or the page is being previewed in Builder,
    // render the BuilderComponent with the specified content and model props.
    if (content || isPreviewing) {
        return <BuilderComponent content={content} model="page" context={{
            actions: {
                fetchChartData: () => dispatch(appSliceActions.fetchChartData()),
                changeProfileData: (data: unknown) => dispatch(appSliceActions.changeProfileData(data)),
                addTask: (payload: {title: string, description: string}) => dispatch(appSliceActions.addTask(payload)),
                setIsLogged: (isLogged: boolean) => dispatch(appSliceActions.setIsLogged(isLogged))
            },
            store: {
                isChartDataLoading
            },
            next: {
                router
            }
        }}/>;
    }
    // If the "content" is falsy and the page is
    // not being previewed in Builder, render the
    // DefaultErrorPage with a 404.
    return <DefaultErrorPage statusCode={404}/>;
}