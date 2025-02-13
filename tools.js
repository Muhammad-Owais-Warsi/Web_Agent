import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
import exa from "./config.js"

function search_web() {
    return new DynamicStructuredTool({
        name: "Search Web",
        description: "The search endpoint lets you intelligently search the web and extract contents from the results.",
        schema: z.object({
            input: z.string().describe("The input we have search about.")
        }),
        func: async (input) => {
            const response = await exa.searchAndContents(
                input,
                {text:true}
            )

            return response.results;
        }

    })
}

function get_contents() {
    return new DynamicStructuredTool({
        name: "Get Contents",
        description: "Get the full page contents, summaries, and metadata for a list of URLs.",
        schema: a.object({
            input: z.string().describe("Link for we have to search.")
        }),
        func: async (input) => {
            const response = await exa.getContents(
                input,
                {text:true}
            );

            return response.results;
        }
    })
}

function find_similar() {
    return new DynamicStructuredTool({
        name: "Find Similar",
        description: "Find similar links to the link provided and optionally return the contents of the pages.",
        schema: z.object({
            input: z.string().describe("LInk for which we have to search")
        }),
        func: async (input) => {
            const response = await exa.findSimilarAndContents(
                input,
                {text:true}
            );

            return response.results;
        }
    })
}

export {
    search_web,
    get_contents,
    find_similar
}