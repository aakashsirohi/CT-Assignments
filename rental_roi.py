class RentalProperty:
    def __init__(self, purchase_price, monthly_rent, annual_expenses, years_held):
        self.purchase_price = purchase_price
        self.monthly_rent = monthly_rent
        self.annual_expenses = annual_expenses
        self.years_held = years_held

    def calculate_roi(self):
        total_investment = self.purchase_price + (
            self.annual_expenses * self.years_held
        )
        total_profit = (self.monthly_rent * 12 * self.years_held) - total_investment
        roi = (total_profit / total_investment) * 100
        return roi


# Example usage:
purchase_price = 200000  # Property purchase price
monthly_rent = 1500  # Monthly rental income
annual_expenses = 6000  # Annual expenses (e.g., property taxes, insurance, maintenance)
years_held = 5  # Number of years the property is held

property1 = RentalProperty(purchase_price, monthly_rent, annual_expenses, years_held)
roi = property1.calculate_roi()

print(f"ROI for the property: {roi:.2f}%")
