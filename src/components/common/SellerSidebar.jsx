import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBoxOpen,
  faShoppingBag,
  faWarehouse,
  faChartBar,
  faUsers,
  faCog,
  faChevronDown,
  faChevronRight,
  faPlus,
  faPenToSquare,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const SellerSidebar = ({ activeTab, setActiveTab }) => {
  const [openDropdowns, setOpenDropdowns] = useState({
    products: false,
  });

  const navItems = [
    { id: "dashboard", icon: faChartLine, label: "Tổng quan" },
    {
      id: "products",
      icon: faBoxOpen,
      label: "Sản phẩm",
      type: "dropdown",
      children: [
        {
          id: "product-list",
          icon: faClipboardList,
          label: "Danh sách sản phẩm",
        },
        { id: "add-product", icon: faPlus, label: "Thêm sản phẩm" },
        { id: "edit-product", icon: faPenToSquare, label: "Sửa sản phẩm" },
      ],
    },
    { id: "orders", icon: faShoppingBag, label: "Đơn hàng" },
    { id: "inventory", icon: faWarehouse, label: "Kho hàng" },
    { id: "analytics", icon: faChartBar, label: "Phân tích" },
    { id: "customers", icon: faUsers, label: "Khách hàng" },
    { id: "settings", icon: faCog, label: "Cài đặt" },
  ];

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleItemClick = (id, parentId = null) => {
    setActiveTab(id);
    if (parentId) {
      setOpenDropdowns((prev) => ({ ...prev, [parentId]: true }));
    }
  };

  const isActive = (id) => activeTab === id;

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r bg-white p-4 hidden md:block overflow-y-auto">
      <nav className="space-y-1 mt-4">
        {navItems.map((item) => {
          if (item.type === "dropdown") {
            return (
              <div key={item.id} className="space-y-1">
                <Collapsible
                  open={openDropdowns[item.id]}
                  onOpenChange={() => toggleDropdown(item.id)}
                >
                  <CollapsibleTrigger
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-lg transition-colors",
                      openDropdowns[item.id] ||
                        item.children.some((child) => isActive(child.id))
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={cn(
                          "mr-3 h-4 w-4",
                          openDropdowns[item.id] ||
                            item.children.some((child) => isActive(child.id))
                            ? "text-blue-500"
                            : "text-gray-500"
                        )}
                      />
                      <span>{item.label}</span>
                    </div>
                    <FontAwesomeIcon
                      icon={
                        openDropdowns[item.id] ? faChevronDown : faChevronRight
                      }
                      className="h-3 w-3 transition-transform duration-200"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Button
                        key={child.id}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          isActive(child.id)
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                        onClick={() => handleItemClick(child.id, item.id)}
                      >
                        <FontAwesomeIcon
                          icon={child.icon}
                          className={cn(
                            "mr-3 h-4 w-4",
                            isActive(item.id)
                              ? "text-blue-500"
                              : "text-gray-500"
                          )}
                        />
                        {child.label}
                        {isActive(child.id) && (
                          <div className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
                        )}
                      </Button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            );
          }
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start h-12 px-4",
                isActive(item.id)
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => handleItemClick(item.id)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={cn(
                  "mr-3 h-4 w-4",
                  isActive(item.id) ? "text-blue-500" : "text-gray-500"
                )}
              />
              {item.label}
              {isActive(item.id) && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
              )}
            </Button>
          );
        })}
      </nav>

      <Separator className="my-4" />

      <div className="p-4 bg-blue-50 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800">
          Nâng cấp tài khoản
        </h3>
        <p className="text-xs text-blue-600 mt-1">Mở khóa tính năng cao cấp</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full text-blue-600 border-blue-200 hover:bg-blue-100"
        >
          Nâng cấp ngay
        </Button>
      </div>
    </aside>
  );
};

export default SellerSidebar;
