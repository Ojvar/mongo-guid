FROM mongo:4.4.12

# Create app directory
WORKDIR /usr/src/configs

# Install app dependencies
COPY replica-set.js .
COPY setup.sh .

ENTRYPOINT [ "/bin/bash" ]
CMD ["./setup.sh"]
