export const VALID_SCHEMA = {
  type: "object",
  default: {},
  required: ["page", "per_page", "total", "total_pages", "data", "support"],
  properties: {
    page: {
      type: "integer",
      default: 0,
    },
    per_page: {
      type: "integer",
      default: 0,
    },
    total: {
      type: "integer",
      default: 0,
    },
    total_pages: {
      type: "integer",
      default: 0,
    },
    data: {
      type: "array",
      default: [],
      title: "The data Schema",
      items: {
        type: "object",
        default: {},
        title: "A Schema",
        required: ["id", "email", "first_name", "last_name", "avatar"],
        properties: {
          id: {
            type: "integer",
          },
          email: {
            type: "string",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          avatar: {
            type: "string",
          },
        },
        examples: [
          {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
          },
        ],
      },
    },
    support: {
      type: "object",
      default: {},
      title: "The support Schema",
      required: ["url", "text"],
      properties: {
        url: {
          type: "string",
          default: "",
        },
        text: {
          type: "string",
          default: "",
        },
      },
    },
  },
};
