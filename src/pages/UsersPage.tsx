import React, { useState } from "react";
import Layout from "../components/dashboards/Layout";
import Topbar from "../components/dashboards/Topbar";
import DataTable from "../components/dashboards/DataTable";
import AddEditModal from "../components/dashboards/AddEditModal";
import ConfirmDialog from "../components/dashboards/ConfirmDialog";
import UserPreviewModal from "../components/dashboards/UserPreviewModal";
import { users, formatDate, getStatusBadge, type User } from "../data/sample";
import type {
  Column,
  ActionsConfig,
} from "../components/dashboards/DataTable/types";

const UsersPage: React.FC = () => {
  // State management
  const [addEditModalOpen, setAddEditModalOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<User | null>(null);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewingUser, setPreviewingUser] = useState<User | null>(null);

  // Define fields for user form
  const userFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text" as const,
      required: true,
      placeholder: "Enter user's full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email" as const,
      required: true,
      placeholder: "user@example.com",
    },
    {
      name: "role",
      label: "Role",
      type: "select" as const,
      required: true,
      options: [
        { value: "admin", label: "Admin" },
        { value: "trainer", label: "Trainer" },
        { value: "member", label: "Member" },
      ],
    },
    {
      name: "status",
      label: "Status",
      type: "select" as const,
      required: true,
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
  ];

  // Event handlers
  const handleSearch = (query: string) => {
    console.log("Searching users for:", query);
    // Implement search logic
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setAddEditModalOpen(true);
  };

  const handleEdit = (item: User) => {
    setSelectedItem(item);
    setAddEditModalOpen(true);
  };

  const handleDelete = (item: User) => {
    setSelectedItem(item);
    setConfirmDialogOpen(true);
  };

  const handlePreview = (item: User) => {
    setPreviewingUser(item);
    setPreviewModalOpen(true);
  };

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log("Submitting user values:", values);
    // Implement save logic
    setAddEditModalOpen(false);
    return Promise.resolve();
  };

  const handleConfirmDelete = () => {
    console.log("Deleting user:", selectedItem);
    // Implement delete logic
    setConfirmDialogOpen(false);
    setSelectedItem(null);
  };

  // Column definitions
  const columns: Column<User>[] = [
    { key: "name", title: "Name", sortable: true },
    { key: "email", title: "Email", sortable: true },
    { key: "role", title: "Role", sortable: true },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <span className={getStatusBadge(row.status)}>{row.status}</span>
      ),
    },
    {
      key: "joinedAt",
      title: "Joined",
      sortable: true,
      render: (row) => formatDate(row.joinedAt),
    },
    {
      key: "lastActive",
      title: "Last Active",
      sortable: true,
      render: (row) => formatDate(row.lastActive),
    },
  ];

  // Actions configuration
  const actionsConfig: ActionsConfig<User> = {
    showEdit: true,
    showDelete: true,
    showPreview: true,
    onEdit: handleEdit,
    onDelete: handleDelete,
    onPreview: handlePreview,
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Topbar */}
        <Topbar
          title="Users"
          search={{
            placeholder: "Search users...",
            onSearch: handleSearch,
          }}
          onAdd={handleAdd}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Users Management
            </h1>
            <p className="text-gray-600 mt-2">
              Manage user accounts, roles, and permissions for the platform.
            </p>
          </div>

          {/* Data Table */}
          <div className="space-y-6">
            <DataTable
              columns={columns as unknown as Column<Record<string, unknown>>[]}
              data={users as unknown as Record<string, unknown>[]}
              actions={
                actionsConfig as unknown as ActionsConfig<
                  Record<string, unknown>
                >
              }
              loading={false}
              pagination={{
                page: 1,
                pageSize: 10,
                total: users.length,
                onChange: (page) => console.log("Page changed:", page),
              }}
              selectable={true}
              onSort={(key, direction) => console.log("Sort:", key, direction)}
            />
          </div>
        </div>

        {/* Add/Edit Modal */}
        <AddEditModal
          open={addEditModalOpen}
          onClose={() => setAddEditModalOpen(false)}
          onSubmit={handleSubmit}
          initialValues={selectedItem ? { ...selectedItem } : {}}
          title={selectedItem ? "Edit User" : "Add New User"}
          fields={userFields}
        />

        {/* Confirm Delete Dialog */}
        <ConfirmDialog
          open={confirmDialogOpen}
          title="Delete User"
          description={`Are you sure you want to delete "${selectedItem?.name}"? This action cannot be undone.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setConfirmDialogOpen(false)}
          confirmText="Delete"
          variant="danger"
        />

        {/* User Preview Modal */}
        <UserPreviewModal
          open={previewModalOpen}
          user={previewingUser}
          onClose={() => {
            setPreviewModalOpen(false);
            setPreviewingUser(null);
          }}
        />
      </div>
    </Layout>
  );
};

export default UsersPage;
