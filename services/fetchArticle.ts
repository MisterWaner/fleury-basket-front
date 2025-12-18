import type { Article } from "@/lib/types";

export async function fetchArticle(articleId: string): Promise<Article | null> {
    try {
        const response = await fetch(
            `http://localhost:3001/lib/fakedatere/${articleId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch article data");
        }

        const article: Article = await response.json();
        
        return article;
    } catch (error) {
        console.error("Error fetching article data:", error);
        return null;
    }
}