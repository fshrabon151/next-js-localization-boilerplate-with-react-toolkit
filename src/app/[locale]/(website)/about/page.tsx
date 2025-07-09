"use client";
import LanguageToggler from "@/components/LanguageToggler";
import { Typography } from "@/components/common/atoms/Typography";
import { Column, Table } from "@/components/common/molecules/Table";
import { useTranslations } from "next-intl";
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 28 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 34 },
  { id: 3, name: "Alice", email: "alice@example.com", age: 28 },
  { id: 4, name: "Bob", email: "bob@example.com", age: 34 },
  { id: 5, name: "Alice", email: "alice@example.com", age: 28 },
  { id: 6, name: "Bob", email: "bob@example.com", age: 34 },
];

const columns: Column<User>[] = [
  { header: "Name", accessor: "name", sortable: true },
  { header: "Email", accessor: "email", sortable: true },
  { header: "Age", accessor: "age", sortable: true },
];

export default function AboutPage() {
  const t = useTranslations("common");

  return (
    <div className="container mx-auto max-w-4xl py-12 space-y-12 text-center">
      {/* Page Title */}
      <section>
        <Typography variant="h1" color="primary">
          {t("about")}
        </Typography>
        <Typography
          variant="subTitle"
          className="mt-2 text-xl text-muted-foreground"
        >
          This is the about page with internationalization support.
        </Typography>
      </section>

      {/* Typography Showcase */}
      <section className="text-left space-y-8">
        <div className="space-y-3">
          <Typography variant="h1">Heading One</Typography>
          <Typography variant="h2">Heading Two</Typography>
          <Typography variant="h3">Heading Three</Typography>
          <Typography variant="h4">Heading Four</Typography>
          <Typography variant="h5">Heading Five</Typography>
          <Typography variant="h6">Heading Six</Typography>
        </div>

        <div className="space-y-3">
          <Typography variant="subTitle">This is a subTitle</Typography>
          <Typography variant="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            feugiat nisl. Integer vel nisi non urna posuere.
          </Typography>
          <Typography variant="muted">This is muted text</Typography>
          <Typography variant="overline">OVERLINE TEXT</Typography>
          <Typography as="span" variant="small">
            Inline Small Span
          </Typography>
        </div>

        {/* Variant Examples */}
        <div className="space-y-4">
          <Typography variant="h1" color="primary">
            Primary Heading
          </Typography>
          <Typography variant="h2" color="secondary" align="center">
            Centered Secondary Heading
          </Typography>
          <Typography variant="paragraph" align="justify">
            This paragraph is justified. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus ullamcorper sapien sed mi commodo
            tincidunt.
          </Typography>
          <Typography variant="muted">Muted Text</Typography>
          <Typography variant="overline" color="destructive">
            Destructive Overline
          </Typography>
          <Typography as="span" variant="small" color="accent">
            Inline Accent Span
          </Typography>
        </div>

        <div className="space-y-4">
          <Table
            data={users}
            columns={columns}
            variant="striped"
            rowKey={(user) => user.id}
            isLoading={false}
            emptyText="No users found."
          />
          <Table
            data={users}
            columns={columns}
            variant="bordered"
            rowKey={(user) => user.id}
            isLoading={false}
            emptyText="No users found."
          />
          <Table
            data={users}
            columns={columns}
            variant="compact"
            rowKey={(user) => user.id}
            isLoading={false}
            emptyText="No users found."
          />
          <Table
            data={users}
            columns={columns}
            variant="default"
            rowKey={(user) => user.id}
            isLoading={false}
            emptyText="No users found."
          />
          <Table
            data={users}
            columns={columns}
            variant="borderedStriped"
            rowKey={(user) => user.id}
            isLoading={false}
            emptyText="No users found."
          />
        </div>
        <LanguageToggler />
      </section>
    </div>
  );
}
