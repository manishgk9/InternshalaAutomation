from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time
import random


def Automation(email, passwrd, profile, location):
    why_hire_me = "I bring a blend of technical expertise, problem-solving skills, and a passion for innovation. My proactive approach and dedication ensure that I deliver high-quality results, making me a valuable asset to your team"
    relocate = ""
    availibility = ""

    chrome_driver_path = "C:/Users/HP/Downloads/chromedriver-win64/chromedriver.exe"
    service = Service(chrome_driver_path)

    driver = webdriver.Chrome(service=service)

    # Visiting the website
    driver.get("https://internshala.com/")

    # login
    login_element = driver.find_element(
        By.XPATH, '//*[@id="header"]/div/nav/div[3]/button[2]')
    login_element.click()

    # Credentials
    # email = "your acount"
    # passwrd = "password"

    # Enter email and password
    email_element = driver.find_element(By.XPATH, '//*[@id="modal_email"]')
    email_element.send_keys(email)
    passwrd_element = driver.find_element(
        By.XPATH, '//*[@id="modal_password"]')
    passwrd_element.send_keys(passwrd)

    time.sleep(4)
    submit_element = driver.find_element(
        By.XPATH, '//*[@id="modal_login_submit"]')
    submit_element.click()

    time.sleep(random.uniform(2, 5))

    # Click on the internships button
    internship_btn = driver.find_element(
        By.XPATH, '//*[@id="internships_new_superscript"]')
    internship_btn.click()

    time.sleep(2)

    # Selecting the profile category
    input_profile = driver.find_element(
        By.XPATH, '//*[@id="select_category_chosen"]/ul/li/input')
    input_profile.click()
    input_profile.send_keys(profile)
    input_profile.send_keys(Keys.ENTER)

    # wait for loading the data..
    for i in range(0, 10):
        print(f"please wait we are loading data 10 sec: {i}")
        time.sleep(1)
    links_ar = []
    # internship_list = driver.find_elements(
    #     By.XPATH, '//*[@id="internship_list_container_1"]/div')

    # for internship in internship_list:
    #     internship_link_half = internship.get_attribute('data-href')
    #     if internship_link_half:
    #         internship_link = f"https://internshala.com/{internship_link_half}"
    #         links_ar.append(internship_link)
    #     else:
    #         print("data is not found..")
    # print(links_ar)
    # driver.get(links_ar[0])
    internship = driver.find_element(
        By.XPATH, '//*[@id="internship_list_container_1"]/div')
    internship_link_half = internship.get_attribute('data-href')
    driver.get(f"https://internshala.com/{internship_link_half}")

    apply_btn = driver.find_element(By.ID, 'apply_now_button')

    apply_btn.click()

    proeed_application = driver.find_element(
        By.XPATH, '//*[@id="layout_table"]/div[4]/button')
    proeed_application.click()

    time.sleep(2)

    cover_letter_div = driver.find_element(
        By.CSS_SELECTOR, "#cover_letter_holder .ql-editor")
    cover_letter_div.clear()

    # Send the cover letter text
    cover_letter_text = why_hire_me
    cover_letter_div.send_keys(cover_letter_text)

    checkbox = driver.find_element(By.ID, "check")
    if not checkbox.is_selected():
        checkbox.click()

    submit = driver.find_element(By.XPATH, '//*[@id="submit"]')
    submit.click()

    time.sleep(10)
    driver.quit()
