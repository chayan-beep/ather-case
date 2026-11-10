
import { useState } from "react";
import {
  Phone,
  Users,
  Wrench,
  Truck,
  Package,
  ArrowUpRight,
  Clock,
  Search,
  Mail,
  MapPin,
  CalendarDays,
  CalendarCheck,
  Plus,
  Minus,
  ShoppingBag,
  CheckCircle,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    title: "Customer Consultation",
    description: "Understand customer needs and recommend suitable vehicles.",
    icon: Users,
    status: "Active",
    tab: "Customers",
  },
  {
    title: "Customisation Studio",
    description: "Manage customer-specific vehicle upgrades and accessories.",
    icon: Wrench,
    status: "Coming Soon",
    tab: "Customisation",
  },
  {
    title: "Doorstep Service",
    description: "Manage vehicle pickup, repairs and doorstep delivery.",
    icon: Truck,
    status: "Coming Soon",
    tab: "Service Requests",
  },
  {
    title: "Parts Intelligence",
    description: "Track genuine parts availability and service requirements.",
    icon: Package,
    status: "Coming Soon",
    tab: "Service Requests",
  },
];


const customers = [
  {
    id: "ATH-1001",
    name: "Aarav Sharma",
    email: "aarav.sharma@email.com",
    phone: "+91 98765 43210",
    city: "Bengaluru",
    vehicle: "Ather 450X",
    date: "08 Nov 2026",
    status: "Interested",
  },
  {
    id: "ATH-1002",
    name: "Priya Mehta",
    email: "priya.mehta@email.com",
    phone: "+91 98765 12340",
    city: "Mumbai",
    vehicle: "Ather Rizta",
    date: "07 Nov 2026",
    status: "Test Ride Scheduled",
  },
  {
    id: "ATH-1003",
    name: "Rohan Das",
    email: "rohan.das@email.com",
    phone: "+91 91234 56780",
    city: "Kolkata",
    vehicle: "Ather 450S",
    date: "06 Nov 2026",
    status: "Follow-up",
  },
  {
    id: "ATH-1004",
    name: "Ananya Iyer",
    email: "ananya.iyer@email.com",
    phone: "+91 99887 66554",
    city: "Chennai",
    vehicle: "Ather Rizta",
    date: "05 Nov 2026",
    status: "Converted",
  },
  {
    id: "ATH-1005",
    name: "Kabir Verma",
    email: "kabir.verma@email.com",
    phone: "+91 90909 80808",
    city: "Delhi",
    vehicle: "Ather 450X",
    date: "04 Nov 2026",
    status: "Interested",
  },
  {
    id: "ATH-1006",
    name: "Shana Kapoor",
    email: "shana.kapoor@email.com",
    phone: "+91 97654 32109",
    city: "Pune",
    vehicle: "Ather Rizta",
    date: "03 Nov 2026",
    status: "Follow-up",
  },
  {
    id: "ATH-1007",
    name: "Ishaan Roy",
    email: "ishaan.roy@email.com",
    phone: "+91 98111 22334",
    city: "Kolkata",
    vehicle: "Ather 450X",
    date: "02 Nov 2026",
    status: "Interested",
  },
  {
    id: "ATH-1008",
    name: "Meera Nair",
    email: "meera.nair@email.com",
    phone: "+91 98222 33445",
    city: "Kochi",
    vehicle: "Ather Rizta",
    date: "01 Nov 2026",
    status: "Converted",
  },
  {
    id: "ATH-1009",
    name: "Aditya Singh",
    email: "aditya.singh@email.com",
    phone: "+91 98333 44556",
    city: "Jaipur",
    vehicle: "Ather 450S",
    date: "31 Oct 2026",
    status: "Test Ride Scheduled",
  },
  {
    id: "ATH-1010",
    name: "Kavya Reddy",
    email: "kavya.reddy@email.com",
    phone: "+91 98444 55667",
    city: "Hyderabad",
    vehicle: "Ather 450X",
    date: "30 Oct 2026",
    status: "Follow-up",
  },
  {
    id: "ATH-1011",
    name: "Arjun Malhotra",
    email: "arjun.m@email.com",
    phone: "+91 98555 66778",
    city: "Chandigarh",
    vehicle: "Ather Rizta",
    date: "29 Oct 2026",
    status: "Interested",
  },
  {
    id: "ATH-1012",
    name: "Diya Banerjee",
    email: "diya.banerjee@email.com",
    phone: "+91 98666 77889",
    city: "Bhubaneswar",
    vehicle: "Ather 450S",
    date: "28 Oct 2026",
    status: "Converted",
  },
  {
    id: "ATH-1013",
    name: "Vihaan Patel",
    email: "vihaan.patel@email.com",
    phone: "+91 98777 88990",
    city: "Ahmedabad",
    vehicle: "Ather 450X",
    date: "27 Oct 2026",
    status: "Test Ride Scheduled",
  },
  {
    id: "ATH-1014",
    name: "Saanvi Gupta",
    email: "saanvi.gupta@email.com",
    phone: "+91 98888 99001",
    city: "Lucknow",
    vehicle: "Ather Rizta",
    date: "26 Oct 2026",
    status: "Follow-up",
  },
];


const customisationItems = [
  {
    id: 1,
    name: "Premium Seat Cover",
    category: "Comfort",
    price: 2499,
    description: "Enhanced seat finish for everyday riding comfort.",
    compatible: "450X, 450S, Rizta",
    color: "#A78BFA",
  },
  {
    id: 2,
    name: "Passenger Backrest",
    category: "Comfort",
    price: 3499,
    description: "Additional passenger support and comfort.",
    compatible: "Rizta",
    color: "#38BDF8",
  },
  {
    id: 3,
    name: "Mobile Phone Holder",
    category: "Utility",
    price: 1299,
    description: "Secure phone mounting for navigation.",
    compatible: "450X, 450S, Rizta",
    color: "#2DD4BF",
  },
  {
    id: 4,
    name: "Floor Mat",
    category: "Protection",
    price: 899,
    description: "Protective floor covering for everyday use.",
    compatible: "Rizta",
    color: "#FBBF24",
  },
  {
    id: 5,
    name: "Body Graphics Kit",
    category: "Styling",
    price: 1999,
    description: "Personalised styling and exterior detailing.",
    compatible: "450X, 450S",
    color: "#FB7185",
  },
  {
    id: 6,
    name: "USB Charging Accessory",
    category: "Utility",
    price: 1499,
    description: "Convenient device charging accessory.",
    compatible: "450X, 450S, Rizta",
    color: "#60A5FA",
  },
];

const customisationOrders = [
  {
    id: "CUS-1001",
    customer: "Aarav Sharma",
    vehicle: "Ather 450X",
    item: "Body Graphics Kit",
    amount: 1999,
    status: "Approved",
  },
  {
    id: "CUS-1002",
    customer: "Priya Mehta",
    vehicle: "Ather Rizta",
    item: "Passenger Backrest",
    amount: 3499,
    status: "In Progress",
  },
  {
    id: "CUS-1003",
    customer: "Rohan Das",
    vehicle: "Ather 450S",
    item: "Mobile Phone Holder",
    amount: 1299,
    status: "Pending",
  },
  {
    id: "CUS-1004",
    customer: "Sneha Kapoor",
    vehicle: "Ather Rizta",
    item: "Floor Mat",
    amount: 899,
    status: "Completed",
  },
];

const serviceRequests = [
  {
    id: "SRV-1001",
    customer: "Aarav Sharma",
    phone: "+91 98765 43210",
    vehicle: "Ather 450X",
    type: "Doorstep Service",
    issue: "Brake inspection and servicing",
    location: "Bengaluru",
    date: "08 Nov 2026",
    status: "Pending",
  },
  {
    id: "SRV-1002",
    customer: "Priya Mehta",
    phone: "+91 98765 12340",
    vehicle: "Ather Rizta",
    type: "Vehicle Pickup",
    issue: "Scheduled maintenance pickup",
    location: "Mumbai",
    date: "09 Nov 2026",
    status: "Scheduled",
  },
  {
    id: "SRV-1003",
    customer: "Rohan Das",
    phone: "+91 91234 56780",
    vehicle: "Ather 450S",
    type: "Repair",
    issue: "Battery performance inspection",
    location: "Kolkata",
    date: "08 Nov 2026",
    status: "In Progress",
  },
  {
    id: "SRV-1004",
    customer: "Ananya Iyer",
    phone: "+91 99887 66554",
    vehicle: "Ather Rizta",
    type: "Maintenance",
    issue: "General vehicle health check",
    location: "Chennai",
    date: "07 Nov 2026",
    status: "Completed",
  },
  {
    id: "SRV-1005",
    customer: "Kabir Verma",
    phone: "+91 90909 80808",
    vehicle: "Ather 450X",
    type: "Doorstep Service",
    issue: "Tyre and suspension inspection",
    location: "Delhi",
    date: "10 Nov 2026",
    status: "Pending",
  },
  {
    id: "SRV-1006",
    customer: "Sneha Kapoor",
    phone: "+91 97654 32109",
    vehicle: "Ather Rizta",
    type: "Repair",
    issue: "Display and connectivity issue",
    location: "Pune",
    date: "08 Nov 2026",
    status: "In Progress",
  },
];

const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

export default function CareLoop() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Customisation Studio state
  const [customCategory, setCustomCategory] = useState("All");
  const [customSearch, setCustomSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  

 // Service Requests state
const [serviceSearch, setServiceSearch] = useState("");
const [serviceStatus, setServiceStatus] = useState("All");
const [serviceType, setServiceType] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    // Filter service requests
const filteredServiceRequests = serviceRequests.filter((request) => {
  const search = serviceSearch.toLowerCase();

  const matchesSearch =
    request.customer.toLowerCase().includes(search) ||
    request.id.toLowerCase().includes(search) ||
    request.vehicle.toLowerCase().includes(search) ||
    request.issue.toLowerCase().includes(search) ||
    request.location.toLowerCase().includes(search);

  const matchesStatus =
    serviceStatus === "All" ||
    request.status === serviceStatus;

  const matchesType =
    serviceType === "All" ||
    request.type === serviceType;

  return matchesSearch && matchesStatus && matchesType;
});
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      customer.name.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.vehicle.toLowerCase().includes(search) ||
      customer.city.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "All" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Filter accessories by category and search
  const filteredCustomisations = customisationItems.filter((item) => {
    const matchesCategory =
      customCategory === "All" || item.category === customCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(customSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Filter service requests
const filteredServiceRequests = serviceRequests.filter((request) => {
  const search = serviceSearch.toLowerCase();

  const matchesSearch =
    request.customer.toLowerCase().includes(search) ||
    request.id.toLowerCase().includes(search) ||
    request.vehicle.toLowerCase().includes(search) ||
    request.issue.toLowerCase().includes(search) ||
    request.location.toLowerCase().includes(search);

  const matchesStatus =
    serviceStatus === "All" ||
    request.status === serviceStatus;

  const matchesType =
    serviceType === "All" ||
    request.type === serviceType;

  return matchesSearch && matchesStatus && matchesType;
});

  // Add an accessory to the selection
  const addCustomisation = (item) => {
    setSelectedItems((previous) =>
      previous.some((selected) => selected.id === item.id)
        ? previous
        : [...previous, item]
    );
  };

  // Remove an accessory
  const removeCustomisation = (id) => {
    setSelectedItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Calculate selected accessory total
  const customisationTotal = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="careloop-page">
      <div className="careloop-heading">
        <div>
          <p className="careloop-eyebrow">
            CUSTOMER EXPERIENCE ECOSYSTEM
          </p>
          <h1>Ather CareLoop</h1>
          <p>
            From choosing the right vehicle to lifelong ownership support.
          </p>
        </div>

        <button className="careloop-call-button">
          <Phone size={17} />
          Call Centre
        </button>
      </div>

      <div className="careloop-tabs">
        {["Overview", "Customers", "Customisation", "Service Requests"].map(
          (tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* OVERVIEW */}
      {activeTab === "Overview" && (
        <>
          <div className="careloop-stats">
            {[
              ["Customer Enquiries", "1,248"],
              ["Service Requests", "386"],
              ["Customisation Orders", "174"],
              ["Pickup Requests", "92"],
            ].map(([label, value]) => (
              <div className="careloop-stat" key={label}>
                <p>{label}</p>
                <h2>{value}</h2>
              </div>
            ))}
          </div>

          <h2 className="careloop-section-title">
            CareLoop Services
          </h2>

          <div className="careloop-services">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  className="careloop-service-card"
                  key={service.title}
                >
                  <div className="careloop-service-icon">
                    <Icon size={22} />
                  </div>

                  <span className="careloop-status">
                    {service.status}
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <button onClick={() => setActiveTab(service.tab)}>
                    Explore <ArrowUpRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="careloop-bottom">
            <div>
              <Clock size={20} />
              <strong>One connected ownership experience</strong>
            </div>
            <p>
              Consultation, personalisation, service and genuine parts
              support in one place.
            </p>
          </div>
        </>
      )}

      {/* CUSTOMERS */}
      {activeTab === "Customers" && (
        <div className="careloop-customers">
          <div className="careloop-content-heading">
            <div>
              <h2>Customer Directory</h2>
              <p>
                Manage enquiries, understand customer interests and track
                potential buyers.
              </p>
            </div>
          </div>

          <div className="careloop-customer-summary">
            <div className="careloop-customer-summary-card">
              <span>Total Customers</span>
              <h2>{customers.length}</h2>
            </div>
            <div className="careloop-customer-summary-card">
              <span>Interested</span>
              <h2>
                {customers.filter((c) => c.status === "Interested").length}
              </h2>
            </div>
            <div className="careloop-customer-summary-card">
              <span>Follow-ups</span>
              <h2>
                {customers.filter((c) => c.status === "Follow-up").length}
              </h2>
            </div>
           <div className="careloop-customer-summary-card test-ride-summary">
  <span>Test Rides Scheduled</span>

  <h2>
    {
      customers.filter(
        (c) => c.status === "Test Ride Scheduled"
      ).length
    }
  </h2>
</div>


            <div className="careloop-customer-summary-card">
              <span>Converted</span>
              <h2>
                {customers.filter((c) => c.status === "Converted").length}
              </h2>
            </div>
          </div>

          <div className="careloop-customer-toolbar">
            <div className="careloop-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search name, email, city or vehicle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter customers by status"
            >
              <option value="All">All Statuses</option>
              <option value="Interested">Interested</option>
              <option value="Test Ride Scheduled">Test Ride Scheduled</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Converted">Converted</option>
            </select>
          </div>

          <div className="careloop-customer-list">
            <div className="careloop-customer-list-heading">
              <h3>Customer Enquiries</h3>
              <span>Demo customer records</span>
            </div>

            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <div className="careloop-customer-row" key={customer.id}>
                  <div className="careloop-customer-avatar">
                    {customer.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>

                  <div className="careloop-customer-main">
                    <div className="careloop-customer-name-line">
                      <h4>{customer.name}</h4>
                      <span
                        className={`careloop-customer-status status-${customer.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {customer.status}
                      </span>
                    </div>

                    <div className="careloop-customer-details">
                      <span>
                        <Mail size={14} />
                        {customer.email}
                      </span>
                      <span>
                        <Phone size={14} />
                        {customer.phone}
                      </span>
                      <span>
                        <MapPin size={14} />
                        {customer.city}
                      </span>
                    </div>

                    <div className="careloop-customer-meta">
                      <span>
                        Vehicle interest: <strong>{customer.vehicle}</strong>
                      </span>
                      <span>
                        <CalendarDays size={14} />
                        {customer.date}
                      </span>
                    </div>
                  </div>

                  <span className="careloop-customer-id">
                    {customer.id}
                  </span>
                </div>
              ))
            ) : (
              <div className="careloop-empty">
                <Users size={28} />
                <h3>No customers found</h3>
                <p>Try changing your search or status filter.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CUSTOMISATION STUDIO */}
      {activeTab === "Customisation" && (
        <div className="careloop-customisation">

          <div className="careloop-content-heading">
            <div>
              <p className="careloop-eyebrow">PERSONALISATION MANAGEMENT</p>
              <h2>Customisation Studio</h2>
              <p>
                Explore accessories and create personalised vehicle upgrade
                selections.
              </p>
            </div>

            
          </div>

          {/* CUSTOMISATION STATS */}
          <div className="careloop-customer-summary">
            <div className="careloop-customer-summary-card">
              <span>Total Orders</span>
              <h2>{customisationOrders.length}</h2>
            </div>

            <div className="careloop-customer-summary-card">
              <span>Pending</span>
              <h2>
                {customisationOrders.filter(
                  (order) => order.status === "Pending"
                ).length}
              </h2>
            </div>

            <div className="careloop-customer-summary-card">
              <span>In Progress</span>
              <h2>
                {customisationOrders.filter(
                  (order) => order.status === "In Progress"
                ).length}
              </h2>
            </div>

            <div className="careloop-customer-summary-card">
              <span>Completed</span>
              <h2>
                {customisationOrders.filter(
                  (order) => order.status === "Completed"
                ).length}
              </h2>
            </div>
          </div>

          {/* ACCESSORY CATALOGUE */}
          <div className="careloop-customisation-layout">
            <div className="careloop-accessory-section">

              <div className="careloop-customisation-toolbar">
                <div>
                  <h3>Accessory Catalogue</h3>
                  <p>Choose accessories for your vehicle.</p>
                </div>

                <div className="careloop-search">
                  <Search size={17} />
                  <input
                    type="text"
                    placeholder="Search accessories..."
                    value={customSearch}
                    onChange={(e) => setCustomSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* CATEGORY FILTERS */}
              <div className="careloop-category-filters">
                {["All", "Comfort", "Utility", "Protection", "Styling"].map(
                  (category) => (
                    <button
                      key={category}
                      className={
                        customCategory === category ? "active" : ""
                      }
                      onClick={() => setCustomCategory(category)}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>

              {/* ACCESSORY CARDS */}
              <div className="careloop-accessory-grid">
                {filteredCustomisations.length > 0 ? (
                  filteredCustomisations.map((item) => {
                    const isSelected = selectedItems.some(
                      (selected) => selected.id === item.id
                    );

                    return (
                      <div
                        className="careloop-accessory-card"
                        key={item.id}
                      >
                        <div
                          className="careloop-accessory-icon"
                          style={{
                            "--accessory-color": item.color,
                          }}
                        >
                          <Package size={25} />
                        </div>

                        <span className="careloop-accessory-category">
                          {item.category}
                        </span>

                        <h4>{item.name}</h4>
                        <p>{item.description}</p>

                        <div className="careloop-accessory-compatible">
                          Compatible: {item.compatible}
                        </div>

                        <div className="careloop-accessory-footer">
                          <strong>{formatPrice(item.price)}</strong>

                          <button
                            className={isSelected ? "added" : ""}
                            onClick={() =>
                              isSelected
                                ? removeCustomisation(item.id)
                                : addCustomisation(item)
                            }
                          >
                            {isSelected ? (
                              <>
                                <CheckCircle size={15} />
                                Added
                              </>
                            ) : (
                              <>
                                <Plus size={15} />
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="careloop-empty">
                    <Search size={28} />
                    <h3>No accessories found</h3>
                    <p>Try another search or category.</p>
                  </div>
                )}
              </div>
            </div>

            {/* SELECTED ITEMS PANEL */}
            <div className="careloop-selected-panel">
              <div className="careloop-selected-heading">
                <div>
                  <ShoppingBag size={20} />
                  <h3>Your Selection</h3>
                </div>
                <span>{selectedItems.length}</span>
              </div>

              {selectedItems.length > 0 ? (
                <div className="careloop-selected-list">
                  {selectedItems.map((item) => (
                    <div
                      className="careloop-selected-item"
                      key={item.id}
                    >
                      <div>
                        <h4>{item.name}</h4>
                        <span>{formatPrice(item.price)}</span>
                      </div>

                      <button
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeCustomisation(item.id)}
                      >
                        <Minus size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="careloop-selection-empty">
                  <ShoppingBag size={30} />
                  <p>No accessories selected yet.</p>
                  <span>Add items from the catalogue.</span>
                </div>
              )}

              <div className="careloop-selection-total">
                <span>Estimated Total</span>
                <h2>{formatPrice(customisationTotal)}</h2>
              </div>

              <button
                className="careloop-create-order"
                disabled={selectedItems.length === 0}
                onClick={() => {
                  alert(
                    `Demo selection created with ${selectedItems.length} accessories. Total: ${formatPrice(customisationTotal)}`
                  );
                }}
              >
                <ClipboardList size={17} />
                Create Customisation Request
              </button>

              <p className="careloop-selection-note">
                This is a demo selection. No actual order or payment is
                submitted.
              </p>
            </div>
          </div>

          {/* CUSTOMISATION ORDERS */}
          <div className="careloop-order-section">
            <div className="careloop-order-heading">
              <div>
                <h3>Recent Customisation Orders</h3>
                <p>Track accessory requests and their progress.</p>
              </div>
              <span>{customisationOrders.length} Records</span>
            </div>

            <div className="careloop-order-list">
              {customisationOrders.map((order) => (
                <div className="careloop-order-row" key={order.id}>
                  <div className="careloop-order-icon">
                    <Wrench size={19} />
                  </div>

                  <div className="careloop-order-main">
                    <h4>{order.customer}</h4>
                    <p>
                      {order.item} · {order.vehicle}
                    </p>
                  </div>

                  <div className="careloop-order-id">
                    {order.id}
                  </div>

                  <strong className="careloop-order-amount">
                    {formatPrice(order.amount)}
                  </strong>

                  <span
                    className={`careloop-order-status status-${order.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SERVICE REQUESTS */}
{activeTab === "Service Requests" && (
  <div className="careloop-service-requests">

    <div className="careloop-content-heading">
      <div>
        <p className="careloop-eyebrow">
          AFTER-SALES MANAGEMENT
        </p>
        <h2>Service Requests</h2>
        <p>
          Manage vehicle servicing, repairs, doorstep pickups
          and customer maintenance requests.
        </p>
      </div>
    </div>

    {/* SERVICE SUMMARY */}
    <div className="careloop-customer-summary">

      <div className="careloop-customer-summary-card">
        <span>Total Requests</span>
        <h2>{serviceRequests.length}</h2>
      </div>

      <div className="careloop-customer-summary-card">
        <span>Pending</span>
        <h2>
          {serviceRequests.filter(
            (r) => r.status === "Pending"
          ).length}
        </h2>
      </div>

      <div className="careloop-customer-summary-card">
        <span>Scheduled</span>
        <h2>
          {serviceRequests.filter(
            (r) => r.status === "Scheduled"
          ).length}
        </h2>
      </div>

      <div className="careloop-customer-summary-card">
        <span>In Progress</span>
        <h2>
          {serviceRequests.filter(
            (r) => r.status === "In Progress"
          ).length}
        </h2>
      </div>

      <div className="careloop-customer-summary-card">
        <span>Completed</span>
        <h2>
          {serviceRequests.filter(
            (r) => r.status === "Completed"
          ).length}
        </h2>
      </div>

    </div>

    {/* SERVICE TOOLBAR */}
    <div className="careloop-customer-toolbar">

      <div className="careloop-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search customer, vehicle or request..."
          value={serviceSearch}
          onChange={(e) =>
            setServiceSearch(e.target.value)
          }
        />
      </div>

      <select
        value={serviceStatus}
        onChange={(e) =>
          setServiceStatus(e.target.value)
        }
        aria-label="Filter service status"
      >
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Scheduled">Scheduled</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={serviceType}
        onChange={(e) =>
          setServiceType(e.target.value)
        }
        aria-label="Filter service type"
      >
        <option value="All">All Service Types</option>
        <option value="Doorstep Service">Doorstep Service</option>
        <option value="Vehicle Pickup">Vehicle Pickup</option>
        <option value="Repair">Repair</option>
        <option value="Maintenance">Maintenance</option>
      </select>

    </div>

    {/* REQUEST LIST */}
    <div className="careloop-customer-list">

      <div className="careloop-customer-list-heading">
        <h3>Service Request Directory</h3>
        <span>Demo service records</span>
      </div>

      {filteredServiceRequests.length > 0 ? (

        filteredServiceRequests.map((request) => (

          <div
            className="careloop-customer-row"
            key={request.id}
          >

            <div className="careloop-customer-avatar">
              <Wrench size={20} />
            </div>

            <div className="careloop-customer-main">

              <div className="careloop-customer-name-line">

                <h4>{request.customer}</h4>

                <span
                  className={`careloop-order-status status-${request.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  {request.status}
                </span>

              </div>

              <div className="careloop-customer-details">

                <span>
                  <Phone size={14} />
                  {request.phone}
                </span>

                <span>
                  <MapPin size={14} />
                  {request.location}
                </span>

                <span>
                  <Truck size={14} />
                  {request.type}
                </span>

              </div>

              <div className="careloop-customer-meta">

                <span>
                  Vehicle: <strong>{request.vehicle}</strong>
                </span>

                <span>
                  Issue: <strong>{request.issue}</strong>
                </span>

                <span>
                  <CalendarDays size={14} />
                  {request.date}
                </span>

              </div>

            </div>

            <span className="careloop-customer-id">
              {request.id}
            </span>

          </div>

        ))

      ) : (

        <div className="careloop-empty">
          <Wrench size={28} />
          <h3>No service requests found</h3>
          <p>
            Try changing your search or filters.
          </p>
        </div>

      )}

    </div>

    {/* SERVICE INFORMATION */}
    <div className="careloop-bottom">

      <div>
        <Truck size={20} />
        <strong>Connected after-sales service</strong>
      </div>

      <p>
        Track customer maintenance, vehicle repairs,
        doorstep servicing and pickup coordination
        through one service management dashboard.
      </p>

    </div>

  </div>
)}
    </div>
  );
}
