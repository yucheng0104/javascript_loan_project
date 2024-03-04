# 本金攤還方式
total_amount = 12000000
amount = total_amount
years = 30
rate = 2.06

#  固定本金
period = years*12
month_pay = int(amount/period)
print(month_pay)

# 月利率

month_rate = rate/100/12
print(month_rate)

interest = round(amount*month_rate)
print(interest)

# 每個月還款金額與利息

datas = []
totalInteret = 0
for i in range(period):
    interest = round(amount*month_rate)
    amount -= month_pay
    if i == period-1:
        datas.append([i+1, month_pay+amount, interest,
                      month_pay+interest+amount+0])
        print(
            f"期別：{i+1} 本金：{month_pay+amount} 利息：{interest} 本立和：{month_pay+interest+amount} 餘額：{0}")
    else:
        datas.append([i+1, month_pay, interest, month_pay+interest+amount])
        print(
            f"期別：{i+1} 本金：{month_pay} 利息：{interest} 本立和：{month_pay+interest} 餘額：{amount}")

    totalInteret += interest
# 總利息支出
print(f"總還款金額：{total_amount+totalInteret}總支出利息：{totalInteret}")

print(datas)
