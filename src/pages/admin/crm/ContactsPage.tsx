import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useContacts } from "@/hooks/useCrm";
import type { Contact } from "@/types/crm";
import ContactsTable from "@/components/crm/ContactsTable";
import ContactDetailSheet from "@/components/crm/ContactDetailSheet";
import ContactForm from "@/components/crm/ContactForm";

export default function ContactsPage() {
  const { data: contacts, isLoading, refetch } = useContacts();

  // Detail sheet state
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  );

  // Create dialog state
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Edit dialog state
  const [editContact, setEditContact] = useState<Contact | null>(null);

  const handleSelectContact = (id: string) => {
    setSelectedContactId(id);
  };

  const handleSaved = () => {
    refetch();
  };

  const handleEditFromSheet = (contact: Contact) => {
    setEditContact(contact);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-primary">Contacts</h1>
          {!isLoading && (
            <Badge variant="secondary" className="text-sm">
              {contacts.length}
            </Badge>
          )}
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus size={16} className="mr-2" />
          New Contact
        </Button>
      </div>

      {/* Contacts table */}
      <ContactsTable
        contacts={contacts}
        onSelectContact={handleSelectContact}
        isLoading={isLoading}
      />

      {/* Detail sheet (slide-out) */}
      <ContactDetailSheet
        contactId={selectedContactId}
        open={selectedContactId !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedContactId(null);
        }}
        onEdit={handleEditFromSheet}
      />

      {/* Create contact dialog */}
      <ContactForm
        contact={null}
        open={showCreateForm}
        onOpenChange={setShowCreateForm}
        onSaved={handleSaved}
      />

      {/* Edit contact dialog */}
      <ContactForm
        contact={editContact}
        open={editContact !== null}
        onOpenChange={(open) => {
          if (!open) setEditContact(null);
        }}
        onSaved={handleSaved}
      />
    </div>
  );
}
