import fangcore

pages = {}

opened = open("Rawr-main.html", "rb")
pages['home'] = opened.read()
opened.close()

def response_handler(client_obj):
	print(client_obj.split_request)
	if client_obj.split_request == []:
		client_obj.set_page(pages['home'])
		client_obj.add_tag(b"Content-Type", b"text/html")
	else:
		opened = open(client_obj.split_request[0], "rb")
		client_obj.set_page(opened.read())
		opened.close()


HTTP_server = fangcore.HTTPServer()

HTTP_server.start_http_server("localhost", 80, 5)

HTTP_server.set_response_method(response_handler)