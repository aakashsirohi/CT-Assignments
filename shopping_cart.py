# my pseudo code
# must have an empty list that will be filled as the inputs are given
# Give the user a choice ... can use if elif conditions
# based on choice ...action in the list
# user gets to see list with show
# user gets to add item with add
# user gets to remove item with delete
# user exits with quit and gets to see the final list when enters quit

shopping_list = []

while True:
    
    choice = input("Do you want to: Show/Add/Delete items to the list or Quit? ").lower()
    if choice == "show":
        print("Shopping List:")
        for item in shopping_list:
            print(item)
    elif choice == "add":
        item = input("Enter the item to add: ")
        shopping_list.append(item)
        print(f"{item} has been added to the shopping list.")
    elif choice == "delete":
        item = input("Enter the item to delete: ")
        if item in shopping_list:
            shopping_list.remove(item)
            print(f"{item} has been removed from the shopping list.")
        else:
            print(f"{item} is not in the shopping list.")
    elif choice == "quit":
        break
    else:
        print("Invalid choice. Please enter 'Show', 'Add', 'Delete', or 'Quit.")
    
print("Final Shopping List:")
for item in shopping_list:
    print(item)
