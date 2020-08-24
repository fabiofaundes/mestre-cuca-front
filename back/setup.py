import setuptools

setuptools.setup(
    name="mestre-cuca",
    version="1.0.0",
    packages=setuptools.find_packages(),
    include_package_data=True,
    author="Fábio M. Faúndes",
    zip_safe=False,
    install_requires=[
        'flask',
    ]
)