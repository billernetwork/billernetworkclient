# Biller Network client portal demo

Open index.html locally to preview. The demo credentials are billernetwork.com / billme / billme. All three fields are required. Successful entry opens https://stripe.com/. The browser checks these public demo values locally, with no submission or storage. The checkbox is visual only. Use sample values exclusively. Billing, receipt uploads, transaction history, and support are described on the page as intended portal features.

## GitHub Pages

1. Upload this folder's contents, including .github, to the root of a separate GitHub repository on main.
2. Under Settings → Pages, select GitHub Actions as the source, and set the custom domain to client.billernetwork.site.
3. In the billernetwork.site DNS zone, create a CNAME with host client and target YOUR-GITHUB-OWNER.github.io. Use the repository owner's GitHub Pages hostname without a repository path.
4. Run Deploy GitHub Pages from Actions if it has not already run. After the DNS check passes, enable Enforce HTTPS in Pages settings.
