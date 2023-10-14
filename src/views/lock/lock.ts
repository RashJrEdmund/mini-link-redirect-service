import template from "./lock.marko";

export default (req: any, res: any) => {
  res.marko(template, {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  });
};
