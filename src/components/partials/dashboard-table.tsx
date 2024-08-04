"use client";

import {
  IconDotsVertical,
  IconEye,
  IconHighlight,
  IconTrash,
} from "@irsyadadl/paranoid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationSection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui";

export default function DashboardTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage users, groups, and roles.</CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto w-[90vw]">
        <Table aria-label="Users">
          <TableHeader>
            <TableColumn>#</TableColumn>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Genre</TableColumn>
            <TableColumn>Age</TableColumn>
            <TableColumn>Occupation</TableColumn>
            <TableColumn />
          </TableHeader>
          <TableBody items={users}>
            {(item: any) => (
              <TableRow id={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.occupation}</TableCell>
                <TableCell className="flex justify-end">
                  <Menu>
                    <MenuTrigger>
                      <IconDotsVertical />
                    </MenuTrigger>
                    <MenuContent showArrow placement="left">
                      <MenuItem>
                        <IconEye /> View
                      </MenuItem>
                      <MenuItem>
                        <IconHighlight /> Edit
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem isDanger>
                        <IconTrash /> Delete
                      </MenuItem>
                    </MenuContent>
                  </Menu>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationList>
            <PaginationItem role="first" />
            <PaginationItem role="previous" />
            <PaginationSection className="lg:hidden rounded-lg border">
              <PaginationItem role="label">1</PaginationItem>
              <PaginationItem role="separator" />
              <PaginationItem className="text-muted-fg" role="label">
                {users.length}
              </PaginationItem>
            </PaginationSection>
            <PaginationSection className="lg:flex hidden" items={pages}>
              {(item: any) => (
                <PaginationItem
                  id={item.value.toString()}
                  isCurrent={item.value === 4}
                  href="#">
                  {item.value}
                </PaginationItem>
              )}
            </PaginationSection>
            <PaginationItem role="next" />
            <PaginationItem role="last" />
          </PaginationList>
        </Pagination>
      </CardFooter>
    </Card>
  );
}

const users = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 25,
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Male",
    age: 40,
    occupation: "Doctor",
  },
  {
    id: 4,
    name: "Emily Chen",
    gender: "Female",
    age: 28,
    occupation: "Teacher",
  },
  {
    id: 5,
    name: "Michael Brown",
    gender: "Male",
    age: 35,
    occupation: "Lawyer",
  },
];
const pages = Array.from({length: users.length / 2}, (_, i) => ({
  value: i + 1,
}));
