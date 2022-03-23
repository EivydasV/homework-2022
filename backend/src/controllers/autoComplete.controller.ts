import { RequestHandler } from "express";

export const autoComplete: RequestHandler<
    {},
    {},
    {},
    { search: string }
> = async (req, res, next) => {
    try {
        const { default: data } = await import("../data/smarty.json");
        const { search } = req.query;

        const filtered = data
            .filter((obj) =>
                obj.displayname
                    .toLowerCase()
                    .includes(search?.toLowerCase() ?? "")
            )
            .slice(0, 10);

        return res.status(200).json({
            records: filtered,
        });
    } catch (e) {
        return res.status(500).json({ message: "something went wrong" });
    }
};
