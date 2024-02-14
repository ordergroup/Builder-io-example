"use client";
import {Builder} from "@builder.io/react";
import {MyTypography} from "@/components/MyTypography";
import {MyTextField} from "@/components/MyTextField";
import {MyButton} from "@/components/MyButton";
import {MySelect} from "@/components/MySelect";
import {DashboardAccordion} from "@/components/DashboardAccordion";
import {ExampleBarChart} from "@/components/Charts";
import {SwitchThemeButton} from "@/components/SwitchThemeButton";
import {TasksList} from "@/components/TasksList";

Builder.registerComponent(MyTypography, {
    name: "MyTypography",
    inputs: [
        {
            name: "content",
            type: "string",
        },
        {
            name: "variant",
            type: "string",
        },
        {
            name: "align",
            type: "string",
        },
    ],
});

Builder.registerComponent(MyTextField, {
    name: "MyTextField",
    inputs: [
        {
            name: "id",
            type: "string",
        },
        {
            name: "value",
            type: "string",
        },
        {
            name: "label",
            type: "string",
        },
        {
            name: "defaultValue",
            type: "string",
        },
        {
            name: "helperText",
            type: "string",
        },
        {
            name: "variant",
            type: "string",
        },
        {
            name: "type",
            type: "string",
        },
        {
            name: "error",
            type: "boolean",
        },
    ],
});

Builder.registerComponent(MyButton, {
    name: "MyButton",
    inputs: [
        {
            name: "label",
            type: "string",
        },
        {
            name: "isDisabled",
            type: "boolean",
        },
        {
            name: "variant",
            type: "string",
        },
    ],
});

Builder.registerComponent(MySelect, {
    name: "MySelect",
    inputs: [
        {
            name: "label",
            type: "string",
        },
        {
            name: "variant",
            type: "string",
        },
        {
            name: "id",
            type: "string",
        },
        {
            name: "name",
            type: "string",
        },
        {
            name: 'items',
            type: 'list',
            defaultValue: [],

            subFields: [
                {
                    name: 'label',
                    type: 'string',
                },
                {
                    name: 'value',
                    type: 'string'
                },
            ],
        }
    ],
});

Builder.registerComponent(DashboardAccordion, {
    name: "DashboardAccordion",
    inputs: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "isDefaultExpanded",
            type: "boolean",
        },
        {
            name: 'items',
            type: 'list',
            defaultValue: [],
            subFields: [
                // TODO: add function as subfield
                {
                    name: 'label',
                    type: 'string',
                }
            ],
        }
    ],
});

Builder.registerComponent(ExampleBarChart, {
    name: "ExampleBarChart",
    inputs: []
})

Builder.registerComponent(SwitchThemeButton, {
    name: "SwitchThemeButton",
    inputs: []
})

Builder.registerComponent(TasksList, {
    name: "TasksList",
    inputs: []
})
